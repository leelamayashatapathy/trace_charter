import {
  capabilities,
  differenceCards,
  evidencePackItems,
  incidentTypes,
  problemImpacts,
  workflowSteps,
} from "../../content/siteContent";

const workflowStepNotes = [
  "Watch high-risk listing and review signals continuously.",
  "Capture immutable before/after records and core artifacts.",
  "Create a structured case with ownership and timeline.",
  "Score impact to route urgency and assign the right responders.",
  "Compile escalation-ready evidence in report format.",
  "Follow incident-specific submission guidance with context.",
  "Track external responses and close the loop on outcomes.",
  "Review patterns portfolio-wide to reduce repeat incidents.",
];

const workflowStepTags = [
  "Signal",
  "Forensics",
  "Case Ops",
  "Triage",
  "Evidence",
  "Escalation",
  "Outcome",
  "Learning",
];

function CoreSections() {
  return (
    <>
      <section id="product" className="section-shell">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Revenue-critical infrastructure</p>
            <h2 className="section-title">
              Local business identity is operational infrastructure, not a marketing side task.
            </h2>
            <p className="section-copy">
              Listing abuse causes immediate revenue and trust impact. Incident response discipline
              is required.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {problemImpacts.map((item) => (
              <article key={item.title} className="card panel-hover p-6">
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="mb-3 text-sm text-slate-600">{item.description}</p>
                <p className="text-sm font-medium text-slate-800">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-slate-200 bg-white/85">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Incident Types</p>
            <h2 className="section-title">Coverage for incidents that create real business damage.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {incidentTypes.map((item) => (
              <article key={item.title} className="card p-5">
                <h3 className="mb-3 text-base font-semibold">{item.title}</h3>
                <p className="mb-2 text-sm text-slate-600">
                  <span className="font-medium text-slate-800">What happens:</span> {item.what}
                </p>
                <p className="mb-2 text-sm text-slate-600">
                  <span className="font-medium text-slate-800">Impact:</span> {item.impact}
                </p>
                <p className="text-sm text-[#0f4c81]">
                  <span className="font-semibold">Platform help:</span> {item.help}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-shell">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">How It Works</p>
            <h2 className="section-title">Detection to resolution in one controlled flow.</h2>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-[#c9d9ea] bg-gradient-to-br from-[#eef4fb] via-white to-[#f8fbff] p-6 sm:p-8">
            <div className="pointer-events-none absolute -left-16 top-8 h-32 w-32 rounded-full bg-[#d4e4f6]/50 blur-2xl" />
            <div className="pointer-events-none absolute -right-14 bottom-4 h-28 w-28 rounded-full bg-[#dcecfb]/50 blur-2xl" />
            <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {workflowSteps.map((step, index) => {
                const completion = Math.round(((index + 1) / workflowSteps.length) * 100);
                return (
                  <article
                    key={step}
                    className="group rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-[2px] hover:shadow-[0_16px_36px_rgba(15,23,42,0.1)]"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="mono inline-flex h-8 min-w-8 items-center justify-center rounded-md border border-[#c7d9ec] bg-[#edf4fb] px-2 text-xs font-semibold text-[#0f4c81]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                        {workflowStepTags[index] ?? "Step"}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-slate-900">{step}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {workflowStepNotes[index] ?? "Structured incident response action."}
                    </p>
                    <div className="mt-4">
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#2a67a0] to-[#43a38b]"
                          style={{ width: `${completion}%` }}
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-slate-200 bg-white/85">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Product Capabilities</p>
            <h2 className="section-title">
              Not just monitoring: detection, forensics, case management, and escalation workflow.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => (
              <article key={item.title} className="card p-5">
                <h3 className="mb-2 text-base font-semibold">{item.title}</h3>
                <p className="mb-2 text-sm text-slate-600">{item.description}</p>
                <p className="text-sm text-slate-800">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="section-shell">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Why We&apos;re Different</p>
            <h2 className="section-title">
              We are not local SEO software. We are business identity incident response.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {differenceCards.map((item) => (
              <article key={item.alternative} className="card p-5">
                <h3 className="mb-3 text-base font-semibold">{item.alternative}</h3>
                <p className="mb-2 text-sm text-slate-600">
                  <span className="font-medium text-slate-800">Typical limitation:</span>{" "}
                  {item.limitation}
                </p>
                <p className="text-sm text-[#0f4c81]">
                  <span className="font-semibold">Our approach:</span> {item.approach}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="evidence-pack"
        className="section-shell border-y border-slate-200 bg-slate-900 text-slate-100"
      >
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
              Signature Workflow
            </p>
            <h2 className="mb-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Submission-ready evidence packs that make escalation credible.
            </h2>
            <p className="mb-6 max-w-2xl text-slate-300">
              Every pack includes chronology, classification, artifacts, diffs, and narrative
              context so reviewers can quickly assess incident legitimacy.
            </p>
            <a
              href="#demo"
              className="inline-block rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200"
            >
              View Sample Evidence Pack
            </a>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
            <h3 className="mb-4 text-base font-semibold">Evidence Pack Includes</h3>
            <ul className="grid gap-2 text-sm text-slate-300">
              {evidencePackItems.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-slate-800 bg-slate-900 px-3 py-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoreSections;
