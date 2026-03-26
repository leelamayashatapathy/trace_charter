import { faqItems } from "./siteContent";

const siteUrl = import.meta.env.VITE_SITE_URL ?? "https://tracecharter.com";

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TraceCharter",
  url: siteUrl,
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
  url: siteUrl,
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};
