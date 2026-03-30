import {
  capabilities,
  differenceCards,
  evidencePackItems,
  incidentTypes,
  problemImpacts,
  workflowSteps,
} from "../../content/siteContent";

const workflowStepNotes = [
  "Identify hijacks, duplicates, review attacks, and ownership changes before more calls are diverted.",
  "Preserve before-and-after proof, source artifacts, and case chronology in a reviewer-ready record.",
  "Guide escalation, appeal preparation, and hardening steps so the listing can return to trusted operation.",
];

const workflowStepTags = ["Signal", "Evidence", "Recovery"];
const workflowStepPhases = ["Phase 01", "Phase 02", "Phase 03"];

const workflowStepBullets = [
  [
    "Watch high-risk listing and review signals.",
    "Spot phone-number swaps, duplicates, and suspicious access changes.",
    "Prioritize incidents by business impact.",
  ],
  [
    "Capture immutable before-and-after records.",
    "Assemble timelines, artifacts, and chain-of-custody notes.",
    "Generate escalation-ready evidence packs.",
  ],
  [
    "Follow guided submission and appeal paths.",
    "Track outcomes, ownership, and next actions.",
    "Harden the listing environment after recovery.",
  ],
];

function CoreSections() {
  return (
    <>
      <section id="product" className="section-shell">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Revenue-critical infrastructure</p>
            <h2 className="section-title">
              For urgent-service brands, your listing is part of your dispatch infrastructure.
            </h2>
            <p className="section-copy">
              For locksmith, HVAC, plumbing, and towing teams, hijacks and fake duplicates can
              divert urgent calls within hours. Recovery needs evidence, discipline, and a calm
              response path.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {problemImpacts.map((item) => (
              <article key={item.title} className="card panel-hover p-6">
                <p className="card-label">Operational Risk</p>
                <h3 className="card-title mb-2">{item.title}</h3>
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
                <p className="card-label">Incident Class</p>
                <h3 className="card-title-sm mb-3">{item.title}</h3>
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
            <h2 className="section-title">Detect, document, and restore in one controlled flow.</h2>
            <p className="section-copy">
              A simplified response path for urgent-service incidents, with clear evidence handling
              and guided recovery at every stage.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-[#c9d9ea] bg-gradient-to-br from-[#eef4fb] via-white to-[#f8fbff] p-6 sm:p-8">
            <div className="pointer-events-none absolute -left-16 top-8 h-32 w-32 rounded-full bg-[#d4e4f6]/50 blur-2xl" />
            <div className="pointer-events-none absolute -right-14 bottom-4 h-28 w-28 rounded-full bg-[#dcecfb]/50 blur-2xl" />
            <div className="pointer-events-none absolute inset-x-10 top-[7.25rem] hidden h-px bg-gradient-to-r from-transparent via-[#bfd3e8] to-transparent lg:block" />
            <div className="relative grid gap-5 lg:grid-cols-3">
              {workflowSteps.map((step, index) => {
                const completion = Math.round(((index + 1) / workflowSteps.length) * 100);
                return (
                  <article
                    key={step}
                    className="group relative flex h-full flex-col rounded-[1.4rem] border border-slate-200/90 bg-white/95 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-[3px] hover:shadow-[0_20px_44px_rgba(15,23,42,0.12)]"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-[1.4rem] bg-gradient-to-r from-[#2a67a0] via-[#4d86b8] to-[#7eb8a3]" />
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="card-label">{workflowStepPhases[index] ?? "Phase"}</p>
                        <h3 className="card-title">{step}</h3>
                      </div>
                      <span className="mono inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-[#c7d9ec] bg-[#edf4fb] px-2 text-xs font-semibold text-[#0f4c81] shadow-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                        {workflowStepTags[index] ?? "Step"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {workflowStepNotes[index] ?? "Structured incident response action."}
                    </p>
                    <ul className="mt-5 space-y-3 text-sm text-slate-600">
                      {(workflowStepBullets[index] ?? []).map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-[0.42rem] h-1.5 w-1.5 rounded-full bg-[#2a67a0]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        <span>Progress</span>
                        <span>{completion}%</span>
                      </div>
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
              Not an SEO dashboard and not just monitoring.
            </h2>
            <p className="section-copy">
              TraceCharter combines detection, forensics, evidence packs, and cross-platform
              appeal guidance for urgent-service brands facing listing and review abuse.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => (
              <article key={item.title} className="card p-5">
                <p className="card-label">Capability</p>
                <h3 className="card-title-sm mb-2">{item.title}</h3>
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
              We are not local SEO software. We are business identity incident response for
              urgent-service brands.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {differenceCards.map((item) => (
              <article key={item.alternative} className="card p-5">
                <p className="card-label">Alternative</p>
                <h3 className="card-title-sm mb-3">{item.alternative}</h3>
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
              Each pack includes chronology, classification, before-and-after diffs, source
              artifacts, SHA-256 hashes, chain-of-custody records, and reviewer-ready narrative
              context.
            </p>
            <a
              href="#consultation"
              className="inline-block rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200"
            >
              View Sample Evidence Pack
            </a>
          </div>
          <div className="group rounded-2xl border border-slate-700 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.35)]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 transition duration-300 group-hover:text-slate-300">
              Pack Contents
            </p>
            <h3 className="mb-4 text-lg font-semibold leading-tight text-slate-100 transition duration-300 group-hover:translate-x-1 group-hover:text-white">
              Evidence Pack Includes
            </h3>
            <ul className="grid gap-2 text-sm text-slate-300">
              {evidencePackItems.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-slate-800 bg-slate-900 px-3 py-2 transition duration-300 group-hover:border-slate-700 group-hover:bg-slate-800/90 group-hover:translate-x-1"
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
