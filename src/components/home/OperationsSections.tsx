import {
  faqItems,
  pricingTiers,
  roiPoints,
  securityControls,
  solutionCards,
} from "../../content/siteContent";

function OperationsSections() {
  return (
    <>
      <section id="security" className="section-shell">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Security, Trust, and Compliance Readiness</p>
            <h2 className="section-title">Security-grade design for enterprise operations.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="card p-6">
              <ul className="grid gap-3 text-sm text-slate-700">
                {securityControls.map((item) => (
                  <li key={item} className="rounded-md border border-slate-200 bg-white px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <p className="card-label">Access Control</p>
              <h3 className="card-title mb-3">Transparent access model</h3>
              <p className="mb-4 text-sm text-slate-600">
                Connections are explicit, scoped, and revocable. We never ask for your primary
                account login, and teams can audit who accessed what, when, and why.
              </p>
              <p className="card-label mt-6">Operational Posture</p>
              <h3 className="card-title mb-3">Calm, realistic posture</h3>
              <p className="text-sm text-slate-600">
                The platform improves evidence quality and workflow discipline across Google,
                Apple, Bing, Yelp, and Facebook. It does not claim control over external
                platform enforcement outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="section-shell border-y border-slate-200 bg-white/85">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Solutions by Segment</p>
            <h2 className="section-title">
              Purpose-built for urgent-service operators and the teams who support them.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {solutionCards.map((item) => (
              <article key={item.title} className="card p-5">
                <p className="card-label">Service Segment</p>
                <h3 className="card-title-sm mb-3">{item.title}</h3>
                <p className="mb-2 text-sm text-slate-600">
                  <span className="font-medium text-slate-800">Pain:</span> {item.pain}
                </p>
                <p className="text-sm text-[#0f4c81]">
                  <span className="font-semibold">Outcome:</span> {item.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Business Impact</p>
            <h2 className="section-title">Operational gains decision-makers can evaluate quickly.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {roiPoints.map((point) => (
              <article key={point} className="card p-5">
                <p className="card-label">Business Impact</p>
                <p className="card-title-sm text-slate-800">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section-shell border-y border-slate-200 bg-white/85">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Pricing</p>
            <h2 className="section-title">
              Plans for self-service, incident response, and managed protection.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article key={tier.name} className="card panel-hover p-6">
                <p className="card-label">Plan</p>
                <h3 className="card-title-lg mb-2">{tier.name}</h3>
                <p className="mb-4 text-sm text-slate-600">{tier.target}</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  {tier.points.map((point) => (
                    <li key={point} className="rounded-md border border-slate-200 bg-white px-3 py-2">
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#consultation"
                  className="mt-5 inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400"
                >
                  Request Consultation
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title">Clear answers before you start recovery.</h2>
          </div>
          <div className="grid gap-3">
            {faqItems.map((item) => (
              <details key={item.q} className="card p-5">
                <summary className="card-title-sm cursor-pointer list-none pr-6">{item.q}</summary>
                <p className="mt-3 text-sm text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default OperationsSections;
