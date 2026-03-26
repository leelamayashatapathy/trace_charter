import "dotenv/config";
import crypto from "node:crypto";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { z } from "zod";
import { verifyTurnstileToken } from "./captcha";
import { deliverLead } from "./integrations";
import { log } from "./logger";
import type { DemoLead } from "./types";

const app = express();
const port = Number(process.env.PORT ?? 8787);

const allowedOrigins = (process.env.ALLOWED_ORIGIN ?? "http://localhost:3000")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const captchaEnabled = process.env.CAPTCHA_ENABLED === "true";

const leadSchema = z.object({
  workEmail: z.string().email(),
  companyName: z.string().min(2).max(120),
  role: z.string().min(2).max(120),
  locationsManaged: z.number().int().positive().max(100000),
  primaryConcern: z.string().min(2).max(240),
  notes: z.string().max(4000).optional(),
  captchaToken: z.string().min(10).optional(),
});

const demoLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    ok: false,
    error: "Too many demo requests from this IP. Please try again shortly.",
  },
});

app.use(helmet());
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["POST", "OPTIONS"],
  }),
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.post("/api/book-demo", demoLimiter, async (req, res) => {
  const requestId = crypto.randomUUID();
  const ip = req.headers["x-forwarded-for"]?.toString().split(",")[0]?.trim() || req.ip || "unknown";

  try {
    const parsed = leadSchema.safeParse(req.body);
    if (!parsed.success) {
      log("warn", "book_demo.validation_failed", {
        requestId,
        ip,
        errors: parsed.error.flatten(),
      });
      res.status(400).json({
        ok: false,
        error: "Invalid form data.",
        requestId,
      });
      return;
    }

    const lead = parsed.data as DemoLead;
    if (captchaEnabled) {
      const captchaValid = await verifyTurnstileToken(lead.captchaToken, ip);
      if (!captchaValid) {
        res.status(400).json({
          ok: false,
          error: "CAPTCHA verification failed.",
          requestId,
        });
        return;
      }
    } else {
      log("info", "captcha.skipped_feature_disabled", { requestId });
    }

    const integrationResult = await deliverLead(lead);

    log("info", "book_demo.accepted", {
      requestId,
      ip,
      email: lead.workEmail,
      company: lead.companyName,
      integrationResult,
    });

    res.status(200).json({
      ok: true,
      message: "Demo request received. Our team will contact you shortly.",
      requestId,
      integrationResult,
    });
  } catch (error) {
    log("error", "book_demo.unhandled_error", {
      requestId,
      ip,
      error: error instanceof Error ? error.message : "Unknown error",
    });

    res.status(500).json({
      ok: false,
      error: "Internal server error.",
      requestId,
    });
  }
});

app.listen(port, () => {
  log("info", "server.started", { port, allowedOrigins });
});
