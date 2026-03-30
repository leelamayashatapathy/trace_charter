import { useEffect } from "react";

const privacySections = [
  {
    heading: "1. Information We Collect",
    paragraphs: [
      "We collect only information reasonably necessary to provide our services, including:",
      "\u2022 Contact information such as name, email address, phone number, company name, and job title",
      "\u2022 Client-provided case information, including listing URLs, screenshots, incident details, and supporting documents",
      "\u2022 Publicly accessible business listing and review data relevant to the reported incident",
      "\u2022 Technical information such as IP address, browser type, device information, and website usage data",
    ],
  },
  {
    heading: "2. How We Use Information",
    paragraphs: [
      "We use information to:",
      "\u2022 Review, analyze, and document listing or reputation incidents",
      "\u2022 Collect and deliver forensic evidence to support incident resolution",
      "\u2022 Communicate with clients about case progress, service updates, and support",
      "\u2022 Improve our website, platform, and service quality",
      "\u2022 Maintain security, prevent misuse, and comply with legal obligations",
    ],
  },
  {
    heading: "3. Our Service Scope",
    paragraphs: [
      "Our engagement is limited to evidence gathering, analysis, and guidance. We do not access, modify, or manage client accounts without explicit written permission.",
      "Tracecharter does not guarantee any particular outcome from Google, Apple, Bing, Yelp, or any other platform, and is not responsible for delays, denials, or decisions made by platform operators.",
    ],
  },
  {
    heading: "4. Data Sources and Handling",
    paragraphs: [
      "We use only publicly accessible data or data provided directly by the client or with the client's authorization.",
      "We aim to minimize data collection and handle only what is necessary for the case. Where appropriate, we redact unnecessary sensitive information from evidence packs, including personal emails, caller IDs, or similar identifiers not required for incident support.",
    ],
  },
  {
    heading: "5. Consent and Authorization",
    paragraphs: [
      "Before collecting evidence or performing case work, Tracecharter requires client authorization.",
      "By engaging our services, the client confirms that it has the right to report, investigate, and address the relevant incident on behalf of the affected business listing, brand, or entity.",
    ],
  },
  {
    heading: "6. Data Retention",
    paragraphs: [
      "Tracecharter retains case data only for as long as reasonably necessary to provide the service, maintain records, and comply with legal obligations. Unless a longer retention period is required by law or active dispute, case materials are generally retained for up to 1 year and then securely deleted.",
    ],
  },
  {
    heading: "7. Sharing of Information",
    paragraphs: [
      "We do not sell personal information.",
      "We may share information only:",
      "\u2022 With the client and its authorized representatives",
      "\u2022 With trusted service providers supporting our operations under confidentiality obligations",
      "\u2022 When required by law, legal process, or regulatory request",
      "\u2022 If we detect suspected criminal activity and believe disclosure to law enforcement is appropriate",
    ],
  },
  {
    heading: "8. Criminal Activity and Escalation",
    paragraphs: [
      "If Tracecharter identifies evidence suggesting criminal conduct, including fraud, extortion, impersonation, or data theft, we may advise the client to contact law enforcement. Where legally appropriate, Tracecharter may also report such conduct to law enforcement at its discretion.",
    ],
  },
  {
    heading: "9. Security",
    paragraphs: [
      "We use reasonable administrative, technical, and organizational safeguards to protect information against unauthorized access, disclosure, alteration, or loss. However, no system can guarantee absolute security.",
    ],
  },
  {
    heading: "10. Liability and Service Limitations",
    paragraphs: [
      "Tracecharter provides a best-effort advisory and evidence support service. We do not guarantee platform enforcement outcomes, incident removal, or prevention of recurrence.",
      "To the maximum extent permitted by law, Tracecharter's liability is limited to direct damages up to the amount paid for the relevant service and excludes indirect, incidental, special, or consequential damages.",
    ],
  },
  {
    heading: "11. Ethical Standards",
    paragraphs: [
      "Tracecharter presents factual evidence only. We do not make unsupported accusations, defame suspected actors, or use unauthorized access methods. Our work is intended to follow applicable platform terms, privacy standards, and lawful investigative practices.",
    ],
  },
  {
    heading: "12. Your Rights",
    paragraphs: [
      "You may contact us to request correction or deletion of personal information we hold, subject to legal and contractual limitations.",
    ],
  },
  {
    heading: "13. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised \"Last Updated\" date.",
    ],
  },
  {
    heading: "14. Contact",
    paragraphs: [
      "Tracecharter",
      "Email: hello@tracecharter.com",
      "Website: tracecharter.com",
      "Address: [Insert Business Address]",
    ],
  },
];

function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "TraceCharter | Privacy Policy";
  }, []);

  function renderParagraph(paragraph: string) {
    if (paragraph === "Website: tracecharter.com") {
      return (
        <>
          Website:{" "}
          <a
            href="https://tracecharter.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#0f4c81] underline decoration-slate-300 underline-offset-4 hover:text-[#0d416d]"
          >
            tracecharter.com
          </a>
        </>
      );
    }

    return paragraph;
  }

  return (
    <main className="section-shell">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-slate-200 bg-white/92 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <p className="section-eyebrow">Legal</p>
          <h1 className="card-title-lg text-[clamp(1.8rem,3vw,2.5rem)]">Tracecharter Privacy Policy</h1>
          <p className="mt-4 whitespace-pre-wrap text-sm font-medium text-slate-500">
            Effective Date: [Insert Date]  |  Last Updated: [Insert Date]
          </p>
          <div className="mt-8 space-y-6 text-[15px] leading-7 text-slate-700">
            <p>
              Tracecharter ("Tracecharter," "we," "our," or "us") provides business identity incident response services focused on public business listings, reviews, impersonation, malicious edits, duplicate listings, and related reputation or listing integrity incidents.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, and protect information when you use our website, contact us, or engage our services.
            </p>

            {privacySections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="text-lg font-semibold text-slate-900">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="whitespace-pre-wrap">
                    {renderParagraph(paragraph)}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicyPage;
