import { faqItems } from "./siteContent";

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TraceCharter",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Business Identity Incident Response platform for Google Business Profile and local listings.",
  featureList: [
    "Incident detection",
    "Forensic evidence snapshots",
    "Case management",
    "Evidence pack generation",
    "Escalation guidance",
    "Portfolio risk dashboards",
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};
