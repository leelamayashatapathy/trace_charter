import { Link } from "react-router-dom";

function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 py-8">
      <div className="container-shell">
        <div className="grid gap-8 py-2 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.8fr)_minmax(0,0.85fr)]">
          <div className="min-w-0 space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white font-semibold text-[#0f4c81] shadow-sm">
                TC
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  TraceCharter
                </p>
                <h2 className="text-xl font-semibold text-slate-900">
                  Business Identity Incident Response
                </h2>
              </div>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">
              Evidence-first recovery for listing abuse, review attacks, impersonation, and
              other reputation integrity incidents affecting urgent-service operators.
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
              Powered by IndicGlyph Technologies Pvt Ltd
            </p>
          </div>
          <div className="min-w-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Navigation
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="text-slate-600 transition hover:text-[#0f4c81]">
                Home
              </Link>
              <Link to="/#consultation" className="text-slate-600 transition hover:text-[#0f4c81]">
                Request Consultation
              </Link>
              <Link to="/privacy-policy" className="text-slate-600 transition hover:text-[#0f4c81]">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="min-w-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Contact
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <a href="mailto:hello@tracecharter.com" className="transition hover:text-[#0f4c81]">
                hello@tracecharter.com
              </a>
              <a
                href="https://tracecharter.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#0f4c81]"
              >
                tracecharter.com
              </a>
              <p>Built for professional incident handling and escalation readiness.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-200/80 pt-4">
          <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>{"\u00A9"} {year} TraceCharter. All rights reserved.</p>
            <p>Powered by IndicGlyph Technologies Pvt Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
