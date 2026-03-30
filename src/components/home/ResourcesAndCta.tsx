import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { proofPoints, resourceTopics } from "../../content/siteContent";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          appearance?: "always" | "execute" | "interaction-only";
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
type CaptchaStatus = "idle" | "loading" | "verified" | "error";

function ResourcesAndCta() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaStatus, setCaptchaStatus] = useState<CaptchaStatus>("loading");
  const [captchaMessage, setCaptchaMessage] = useState("");
  const captchaEnabled = import.meta.env.VITE_CAPTCHA_ENABLED === "true";
  const siteKey = captchaEnabled ? import.meta.env.VITE_TURNSTILE_SITE_KEY : undefined;
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
          setCaptchaStatus("error");
          setCaptchaMessage("Security verification failed to load. Please refresh and try again.");
          if (intervalId) {
            window.clearInterval(intervalId);
          }
        }
        return;
      }

      widgetIdRef.current = api.render(turnstileContainerRef.current, {
        sitekey: siteKey,
        appearance: "always",
        callback: (token) => {
          setCaptchaToken(token);
          setCaptchaStatus("verified");
          setCaptchaMessage("Security verification complete.");
        },
        "expired-callback": () => {
          setCaptchaToken("");
          setCaptchaStatus("idle");
          setCaptchaMessage("Verification expired. Please verify again.");
        },
        "error-callback": () => {
          setCaptchaToken("");
          setCaptchaStatus("error");
          setCaptchaMessage("Security verification failed. Please try again.");
        },
      });
      setCaptchaStatus("idle");
      setCaptchaMessage("");

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
      setCaptchaStatus("loading");
      setCaptchaMessage("");
    };
  }, [siteKey]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const locationsManaged = Number(formData.get("locationsManaged"));

    if (!Number.isInteger(locationsManaged) || locationsManaged < 1) {
      setSubmitStatus("error");
      setSubmitMessage("Please provide a valid number of affected locations.");
      return;
    }

    if (captchaEnabled && siteKey && (!captchaToken || captchaStatus !== "verified")) {
      setSubmitStatus("error");
      setSubmitMessage("Please verify the security check before submitting.");
      return;
    }

    setSubmitStatus("submitting");
    setSubmitMessage("");

    try {
      const payload = {
        workEmail: String(formData.get("workEmail") ?? "").trim(),
        companyName: String(formData.get("companyName") ?? "").trim(),
        serviceCategory: String(formData.get("serviceCategory") ?? "").trim(),
        locationsManaged,
        incidentType: String(formData.get("incidentType") ?? "").trim(),
        phoneDiverted: String(formData.get("phoneDiverted") ?? "").trim(),
        notes: String(formData.get("notes") ?? "").trim() || undefined,
        captchaToken: captchaEnabled ? captchaToken || undefined : undefined,
      };

      const response = await fetch("/api/request-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { ok: boolean; message?: string; error?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Failed to submit consultation request.");
      }

      form.reset();
      if (captchaEnabled) {
        window.turnstile?.reset(widgetIdRef.current ?? undefined);
      }
      setCaptchaToken("");
      setCaptchaStatus(captchaEnabled ? "idle" : "verified");
      setCaptchaMessage(captchaEnabled ? "Please verify again before sending another request." : "");
      setSubmitStatus("success");
      setSubmitMessage(result.message ?? "Consultation request received.");
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
            <p className="card-label">Resource Hub</p>
            <h2 className="card-title-lg mb-4">
              Practical guidance for detecting hijacks, documenting proof, and protecting call
              flow.
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
            <p className="card-label">Case Notes</p>
            <h2 className="card-title-lg mb-4">
              Short recovery examples that reinforce the proof-first positioning.
            </h2>
            <div className="space-y-3">
              {proofPoints.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-4"
                >
                  <h3 className="card-title-sm mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className="section-shell">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.03fr_0.97fr]">
          <div>
            <p className="section-eyebrow">Final CTA</p>
            <h2 className="section-title">
              Get your calls back under control with evidence-first incident response.
            </h2>
            <p className="section-copy">
              Request a consultation to review hijacks, duplicates, review attacks, and recovery
              options in one structured response workflow.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#consultation-form"
                className="rounded-lg bg-[#0f4c81] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0d416d]"
              >
                Request Consultation
              </a>
              <a
                href="#evidence-pack"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
              >
                View Evidence Pack
              </a>
              <a
                href="#how-it-works"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
              >
                See Response Steps
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Let&apos;s help you get your calls back under your control.
            </p>
          </div>

          <form
            id="consultation-form"
            className="card space-y-4 p-6"
            aria-label="Request consultation form"
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
                <label htmlFor="serviceCategory" className="form-label">
                  Industry / service type
                </label>
                <select id="serviceCategory" name="serviceCategory" className="form-input" required>
                  <option value="Locksmith">Locksmith</option>
                  <option value="HVAC">HVAC</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Towing">Towing</option>
                  <option value="Roadside assistance">Roadside assistance</option>
                  <option value="Agency">Agency</option>
                  <option value="Other urgent-service business">Other urgent-service business</option>
                </select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="locationsManaged" className="form-label">
                  Number of locations
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
                <label htmlFor="incidentType" className="form-label">
                  Incident type
                </label>
                <select id="incidentType" name="incidentType" className="form-input" required>
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
                  <option value="Unauthorized owner / access drift">
                    Unauthorized owner / access drift
                  </option>
                  <option value="Knowledge panel misinformation">
                    Knowledge panel misinformation
                  </option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="phoneDiverted" className="form-label">
                Is your phone line currently diverted?
              </label>
              <select id="phoneDiverted" name="phoneDiverted" className="form-input" required>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not sure">Not sure</option>
              </select>
            </div>
            <div>
              <label htmlFor="notes" className="form-label">
                Describe your incident
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="form-input"
                placeholder="Example: Our emergency number was replaced on three listings and calls are being diverted."
              />
            </div>

            {captchaEnabled ? (
              siteKey ? (
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div ref={turnstileContainerRef} />
                  {captchaStatus === "loading" ? (
                    <p className="mt-2 text-xs text-slate-500">Loading CAPTCHA...</p>
                  ) : null}
                  <p
                    className={`mt-3 text-xs ${
                      captchaStatus === "verified"
                        ? "text-emerald-700"
                        : captchaStatus === "error"
                          ? "text-rose-700"
                          : "text-slate-500"
                    }`}
                  >
                    {captchaMessage || "Complete the Cloudflare security check before submitting."}
                  </p>
                  <input type="hidden" name="captchaToken" value={captchaToken} readOnly />
                </div>
              ) : (
                <p className="text-xs text-amber-700">
                  CAPTCHA is enabled but missing `VITE_TURNSTILE_SITE_KEY`.
                </p>
              )
            ) : null}

            <p className="text-xs text-slate-500">
              Security reassurance: least-privilege connection, transparent access model, and
              customer-controlled retention.
            </p>
            <p className="text-xs text-slate-500">
              Need urgent help? Submit the consultation form for triage review.
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
              disabled={
                submitStatus === "submitting" || (captchaEnabled && siteKey && captchaStatus !== "verified")
              }
              className="w-full rounded-lg bg-[#0f4c81] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0d416d] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitStatus === "submitting" ? "Submitting..." : "Request Consultation"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ResourcesAndCta;
