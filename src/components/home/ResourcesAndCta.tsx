import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { microcopySamples, resourceTopics } from "../../content/siteContent";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

function ResourcesAndCta() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaReady, setCaptchaReady] = useState(false);
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!siteKey || !turnstileContainerRef.current || widgetIdRef.current) {
      return;
    }

    let cancelled = false;
    let attempts = 0;
    let intervalId = 0;

    const renderWidget = () => {
      if (cancelled || widgetIdRef.current || !turnstileContainerRef.current || !siteKey) {
        return;
      }

      const api = window.turnstile;
      if (!api) {
        attempts += 1;
        if (attempts > 80) {
          setCaptchaReady(false);
          if (intervalId) {
            window.clearInterval(intervalId);
          }
        }
        return;
      }

      widgetIdRef.current = api.render(turnstileContainerRef.current, {
        sitekey: siteKey,
        callback: (token) => {
          setCaptchaToken(token);
          setCaptchaReady(true);
        },
        "expired-callback": () => {
          setCaptchaToken("");
          setCaptchaReady(false);
        },
        "error-callback": () => {
          setCaptchaToken("");
          setCaptchaReady(false);
        },
      });
      setCaptchaReady(true);

      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };

    renderWidget();
    intervalId = window.setInterval(renderWidget, 250);

    return () => {
      cancelled = true;
      if (intervalId) {
        window.clearInterval(intervalId);
      }
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
      setCaptchaToken("");
    };
  }, [siteKey]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const locationsManaged = Number(formData.get("locationsManaged"));

    if (!Number.isInteger(locationsManaged) || locationsManaged < 1) {
      setSubmitStatus("error");
      setSubmitMessage("Please provide a valid number of managed locations.");
      return;
    }

    if (siteKey && !captchaToken) {
      setSubmitStatus("error");
      setSubmitMessage("Please complete CAPTCHA verification before submitting.");
      return;
    }

    setSubmitStatus("submitting");
    setSubmitMessage("");

    try {
      const payload = {
        workEmail: String(formData.get("workEmail") ?? "").trim(),
        companyName: String(formData.get("companyName") ?? "").trim(),
        role: String(formData.get("role") ?? "").trim(),
        locationsManaged,
        primaryConcern: String(formData.get("primaryConcern") ?? "").trim(),
        notes: String(formData.get("notes") ?? "").trim() || undefined,
        captchaToken: captchaToken || undefined,
      };

      const response = await fetch("/api/book-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { ok: boolean; message?: string; error?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Failed to submit demo request.");
      }

      form.reset();
      window.turnstile?.reset(widgetIdRef.current ?? undefined);
      setCaptchaToken("");
      setSubmitStatus("success");
      setSubmitMessage(result.message ?? "Demo request received.");
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(error instanceof Error ? error.message : "Submission failed.");
    }
  }

  return (
    <>
      <section id="resources" className="section-shell border-y border-slate-200 bg-white/85">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div className="card p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Content Hub Strategy
            </p>
            <h2 className="mb-4 text-2xl font-semibold">
              SEO-forward resources for high-intent incident response searches.
            </h2>
            <ul className="space-y-2 text-sm text-slate-700">
              {resourceTopics.map((topic) => (
                <li key={topic} className="rounded-md border border-slate-200 bg-white px-3 py-2">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              UI Microcopy Kit
            </p>
            <h2 className="mb-4 text-2xl font-semibold">
              Operational language for alerts, tasks, evidence, and onboarding.
            </h2>
            <div className="flex flex-wrap gap-2">
              {microcopySamples.map((copy) => (
                <span
                  key={copy}
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700"
                >
                  {copy}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="section-shell">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.03fr_0.97fr]">
          <div>
            <p className="section-eyebrow">Final CTA</p>
            <h2 className="section-title">
              Protect your listings with proof-first incident response workflows.
            </h2>
            <p className="section-copy">
              Book a demo to see detection, case handling, evidence pack generation, and
              escalation guidance in one disciplined system.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#demo-form"
                className="rounded-lg bg-[#0f4c81] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0d416d]"
              >
                Book Demo
              </a>
              <a
                href="#evidence-pack"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
              >
                View a Sample Evidence Pack
              </a>
            </div>
          </div>

          <form
            id="demo-form"
            className="card space-y-4 p-6"
            aria-label="Book demo form"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="workEmail" className="form-label">
                Work email
              </label>
              <input
                id="workEmail"
                name="workEmail"
                type="email"
                className="form-input"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="companyName" className="form-label">
                  Company name
                </label>
                <input id="companyName" name="companyName" type="text" className="form-input" required />
              </div>
              <div>
                <label htmlFor="role" className="form-label">
                  Role
                </label>
                <input id="role" name="role" type="text" className="form-input" required />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="locationsManaged" className="form-label">
                  Locations managed
                </label>
                <input
                  id="locationsManaged"
                  name="locationsManaged"
                  type="number"
                  min={1}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="primaryConcern" className="form-label">
                  Primary concern
                </label>
                <select id="primaryConcern" name="primaryConcern" className="form-input" required>
                  <option value="Listing hijack / malicious edits">
                    Listing hijack / malicious edits
                  </option>
                  <option value="Fake duplicates / impersonation">
                    Fake duplicates / impersonation
                  </option>
                  <option value="Review attacks / extortion">Review attacks / extortion</option>
                  <option value="Suspension / visibility restrictions">
                    Suspension / visibility restrictions
                  </option>
                  <option value="Portfolio governance and reporting">
                    Portfolio governance and reporting
                  </option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="notes" className="form-label">
                What workflow gap do you need to fix first?
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="form-input"
                placeholder="Example: We need faster triage and stronger evidence quality for impersonation incidents."
              />
            </div>

            {siteKey ? (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <div ref={turnstileContainerRef} />
                {!captchaReady ? (
                  <p className="mt-2 text-xs text-slate-500">Loading CAPTCHA...</p>
                ) : null}
                <input type="hidden" name="captchaToken" value={captchaToken} readOnly />
              </div>
            ) : (
              <p className="text-xs text-amber-700">
                CAPTCHA is not configured. Set `VITE_TURNSTILE_SITE_KEY` for production.
              </p>
            )}

            <p className="text-xs text-slate-500">
              Security reassurance: least-privilege connection, transparent access model, and
              customer-controlled retention.
            </p>

            {submitMessage ? (
              <p
                className={`rounded-md border px-3 py-2 text-sm ${
                  submitStatus === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-rose-200 bg-rose-50 text-rose-700"
                }`}
              >
                {submitMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submitStatus === "submitting"}
              className="w-full rounded-lg bg-[#0f4c81] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0d416d] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitStatus === "submitting"
                ? "Submitting..."
                : "Request Demo and Workflow Review"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ResourcesAndCta;
