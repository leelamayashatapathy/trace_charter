import { trustSignals } from "../../content/siteContent";

function HeroAndTrust() {
  return (
    <>
      <section className="section-shell">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="stagger space-y-6">
            <p className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
              New Category: Business Identity Incident Response
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Incident response for the public business identity your revenue depends on.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Detect suspicious listing and review incidents in minutes, preserve structured proof
              automatically, and run escalation workflows with SOC-like discipline.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#demo"
                className="rounded-lg bg-[#0f4c81] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0d416d]"
              >
                Book a Demo
              </a>
              <a
                href="#how-it-works"
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
              >
                See the Workflow
              </a>
            </div>
            <p className="text-sm text-slate-500">
              Fast detection + structured proof + response workflow + revenue protection. External
              enforcement outcomes are never guaranteed.
            </p>
          </div>

          <div className="fade-in-up rounded-2xl border border-slate-300 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.11em] text-slate-500">
                  Identity Ops Console
                </p>
                <h2 className="text-lg font-semibold">Live Incident Board</h2>
              </div>
              <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                Severity: critical
              </span>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-2 flex justify-between">
                  <p className="text-sm font-semibold text-slate-800">Incident Alert Feed</p>
                  <p className="mono text-xs text-slate-500">Last verified 4 minutes ago</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex justify-between">
                    <span>Phone number changed on 14 locations</span>
                    <span className="font-semibold text-rose-700">critical</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Review spike detected in NYC cluster</span>
                    <span className="font-semibold text-amber-700">high</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Duplicate listing network detected</span>
                    <span className="font-semibold text-amber-700">high</span>
                  </li>
                </ul>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="mb-2 text-sm font-semibold text-slate-800">Before / After Diff</p>
                  <p className="mb-2 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600">
                    Before: <span className="mono">+1 (415) 555-0143</span>
                  </p>
                  <p className="rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-xs text-rose-700">
                    After: <span className="mono">+1 (415) 555-0199</span>
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="mb-2 text-sm font-semibold text-slate-800">Case Timeline</p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li>10:04 - Incident opened</li>
                    <li>10:11 - Owner assigned</li>
                    <li>10:18 - Evidence pack generated</li>
                    <li>10:23 - Submission path recommended</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl border border-[#c8d9ea] bg-[#eef4fb] p-4 text-xs text-slate-700">
                Open incident | Export escalation-ready report | Audit trail enabled
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/85 py-10">
        <div className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustSignals.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="mb-2 text-sm font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default HeroAndTrust;
