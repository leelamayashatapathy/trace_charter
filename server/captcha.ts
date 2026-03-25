import { log } from "./logger";

type TurnstileVerification = {
  success: boolean;
  "error-codes"?: string[];
};

export async function verifyTurnstileToken(token: string | undefined, ip: string) {
  const secret = process.env.CAPTCHA_SECRET_KEY;

  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      log("error", "captcha.missing_secret_in_production");
      return false;
    }

    log("warn", "captcha.skipped_no_secret", { mode: process.env.NODE_ENV ?? "development" });
    return true;
  }

  if (!token) {
    log("warn", "captcha.missing_token");
    return false;
  }

  const body = new URLSearchParams({
    secret,
    response: token,
    remoteip: ip,
  });

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    log("error", "captcha.verify_http_error", { status: response.status });
    return false;
  }

  const result = (await response.json()) as TurnstileVerification;
  if (!result.success) {
    log("warn", "captcha.verify_failed", { errorCodes: result["error-codes"] ?? [] });
  }

  return result.success;
}
