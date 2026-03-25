import {
  capabilities,
  differenceCards,
  evidencePackItems,
  incidentTypes,
  problemImpacts,
  workflowSteps,
} from "../../content/siteContent";

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
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <article key={step} className="card panel-hover p-5">
                <p className="mono mb-2 text-xs text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-base font-semibold">{step}</h3>
              </article>
            ))}
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
