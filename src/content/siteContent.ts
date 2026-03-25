export type Item = {
  title: string;
  description: string;
  detail?: string;
};

export const navItems = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Why Us", href: "#why-us" },
  { label: "Security", href: "#security" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
];

export const trustSignals: Item[] = [
  { title: "Built for multi-location teams", description: "Portfolio-level visibility across high-risk listings." },
  { title: "Designed for agencies and operators", description: "Role-aware workflows and client-safe reporting." },
  { title: "Evidence-pack workflow", description: "Submission-ready artifacts with timestamps and diffs." },
  { title: "Audit trail by default", description: "Case actions, owners, and status changes are logged." },
  { title: "Least-privilege OAuth model", description: "Scoped permissions, explicit access, and revocation controls." },
  { title: "Security-first architecture", description: "Tenant segregation, encrypted tokens, and retention controls." },
];

export const problemImpacts: Item[] = [
  {
    title: "Wrong contact data",
    description: "Phone, URL, or hours are altered without approval.",
    detail: "Leads get diverted and revenue leakage begins immediately.",
  },
  {
    title: "Fraud and impersonation",
    description: "Fake listings and impersonation profiles appear near your brand.",
    detail: "Customers are misdirected and trust damage accelerates.",
  },
  {
    title: "Review attacks and extortion",
    description: "Coordinated review spikes or coercive demands hit critical locations.",
    detail: "Ratings volatility and trust loss suppress conversion.",
  },
  {
    title: "Manual escalation chaos",
    description: "Teams rely on screenshots, inboxes, and ad hoc trackers.",
    detail: "Response quality becomes slow, inconsistent, and unauditable.",
  },
];

export const incidentTypes = [
  {
    title: "Listing hijack / malicious edits",
    what: "Core listing fields are changed without authorized approval.",
    impact: "Demand is misrouted and booked revenue drops.",
    help: "Alert quickly, store before/after diffs, and open a severity-scored case.",
  },
  {
    title: "Fake duplicate listings",
    what: "Unauthorized duplicates compete for your legitimate demand.",
    impact: "Search confusion and fragmented local visibility.",
    help: "Cluster duplicates, preserve evidence, and create escalation-ready exports.",
  },
  {
    title: "Impersonation / brand fraud",
    what: "Actors mimic your brand identity in local search.",
    impact: "Trust loss and potential fraud exposure.",
    help: "Capture immutable snapshots and link suspicious entities.",
  },
  {
    title: "Review bombing",
    what: "Abnormal negative review bursts target locations.",
    impact: "Rating instability and customer hesitation.",
    help: "Detect spikes, thread evidence, and track response outcomes.",
  },
  {
    title: "Review extortion",
    what: "Bad actors demand payment or action to remove harmful reviews.",
    impact: "Legal, trust, and operations pressure.",
    help: "Preserve chronology and export report-ready proof.",
  },
  {
    title: "Suspension / visibility restrictions",
    what: "Profiles lose visibility, verification, or capabilities.",
    impact: "Sharp local demand capture decline.",
    help: "Run structured triage and maintain documentation for escalation loops.",
  },
  {
    title: "Unauthorized owner / access drift",
    what: "Unexpected ownership or access changes occur.",
    impact: "Operational lockout and increased abuse risk.",
    help: "Flag drift, assign owners, and maintain complete access timeline.",
  },
  {
    title: "Knowledge panel misinformation",
    what: "Public details become inaccurate or misleading.",
    impact: "Trust degradation and support overhead.",
    help: "Track misinformation state and route correction playbooks.",
  },
];

export const workflowSteps = [
  "Detect",
  "Preserve proof",
  "Open case",
  "Assign severity and tasks",
  "Generate evidence pack",
  "Escalate correctly",
  "Track outcome",
  "Review portfolio risk",
];

export const capabilities: Item[] = [
  { title: "Monitoring and alerts", description: "Watch high-risk listing and review events in near real time.", detail: "Prioritized by business impact, not noise." },
  { title: "Forensic change history", description: "Immutable before/after records and timestamps.", detail: "Defensible records for external reporting." },
  { title: "Case management", description: "Severity, owners, SLAs, tasks, and timeline in one system.", detail: "Operate incidents with consistency." },
  { title: "Evidence pack generation", description: "Submission-ready reports built from case context.", detail: "Reduce manual compilation overhead." },
  { title: "Submission assistant", description: "Incident-specific reporting path guidance.", detail: "Human-in-the-loop support without false guarantees." },
  { title: "Threat intelligence", description: "Pattern detection across locations and accounts.", detail: "Identify systemic abuse, not isolated events." },
  { title: "Portfolio dashboards", description: "Executive risk posture by region and brand.", detail: "Clear view into unresolved critical incidents." },
  { title: "Security and audit controls", description: "RBAC, access logs, and configurable retention.", detail: "Enterprise trust and accountability readiness." },
];

export const differenceCards = [
  {
    alternative: "Listings sync platforms",
    limitation: "Built for distribution and updates, not incident forensics or case operations.",
    approach: "Focused on abuse detection, structured proof, and escalation workflow.",
  },
  {
    alternative: "Review/reputation suites",
    limitation: "Optimized for marketing response queues over forensic operations.",
    approach: "Treats suspicious review events as incidents with severity and timeline.",
  },
  {
    alternative: "Change-monitoring alarms",
    limitation: "Alert-only products leave proof and escalation work to manual effort.",
    approach: "Combines detection, cases, evidence packs, and guided response.",
  },
  {
    alternative: "Spreadsheets + manual escalation",
    limitation: "Fragmented ownership and weak auditability.",
    approach: "Structured operations with owners, SLAs, and complete logs.",
  },
  {
    alternative: "Support-ticket-only workflows",
    limitation: "Tickets track requests but not forensic context.",
    approach: "Unified incident record with evidence, tasks, and outcome tracking.",
  },
];

export const evidencePackItems = [
  "Cover page with incident summary",
  "Business and location metadata",
  "Incident classification and severity rationale",
  "Chronological timeline of events",
  "Suspicious review URLs and linked entities",
  "Potential attacker identifiers",
  "Before/after listing diffs",
  "Timestamped screenshots and source artifacts",
  "Narrative summary for reviewer context",
  "Reporting guidance by incident type",
  "Bulk export for multi-location incidents",
];

export const securityControls = [
  "Least-privilege OAuth connection model",
  "Encrypted token handling and key controls",
  "Tenant isolation and strict data segregation",
  "Audit logs for critical actions and exports",
  "Role-based access control with scoped permissions",
  "Customer-controlled retention windows",
  "Minimal evidence retention posture",
  "Transparent access model and revocation",
  "Human-in-the-loop escalation workflows",
];

export const solutionCards = [
  {
    title: "Multi-location brands",
    pain: "High-volume listing risk across regions with uneven response quality.",
    outcome: "Centralized visibility and standardized incident playbooks.",
  },
  {
    title: "Agencies",
    pain: "Client trust exposure when incidents are handled manually.",
    outcome: "Evidence-first workflows and stronger retention reporting.",
  },
  {
    title: "High-risk categories",
    pain: "Frequent impersonation, fake listings, and extortion patterns.",
    outcome: "Fast triage and escalation-grade forensic proof.",
  },
  {
    title: "Enterprise operations teams",
    pain: "No single system of record across trust, CX, and operations.",
    outcome: "Unified incident operations with auditability at scale.",
  },
];

export const roiPoints = [
  "Faster time-to-triage on listing and review incidents",
  "Reduced lead leakage from profile misinformation",
  "Less operational chaos during escalations",
  "Higher quality submission evidence",
  "More consistent response across teams and partners",
  "Improved agency client retention",
  "Stronger executive reporting on local identity risk",
  "Lower reputational and fraud exposure over time",
];

export const pricingTiers = [
  {
    name: "Response",
    target: "Growing multi-location operators",
    points: [
      "Core monitoring and incident alerts",
      "Case timeline and owner assignment",
      "Standard evidence pack export",
      "Email support",
    ],
  },
  {
    name: "Portfolio",
    target: "Agencies and regional enterprises",
    points: [
      "Cross-location threat detection",
      "Advanced SLA workflows",
      "Bulk incident handling",
      "Priority onboarding support",
    ],
  },
  {
    name: "Enterprise",
    target: "Large brands and trust-critical operators",
    points: [
      "Custom retention and access policies",
      "Governance and implementation reviews",
      "Executive risk reporting model",
      "Security and procurement support",
    ],
  },
];

export const faqItems = [
  {
    q: "Is this a local SEO tool?",
    a: "No. This is Business Identity Incident Response for listings and review abuse.",
  },
  {
    q: "Do you guarantee removals or reinstatements?",
    a: "No. External platform enforcement is outside our control. We improve response quality, speed, and defensibility.",
  },
  {
    q: "What platform do you support first?",
    a: "Google Business Profile is the primary starting surface.",
  },
  {
    q: "What access is required?",
    a: "Least-privilege OAuth with transparent, revocable permissions.",
  },
  {
    q: "What data is stored?",
    a: "Only operationally necessary incident, evidence, and audit data with retention controls.",
  },
  {
    q: "How do evidence packs work?",
    a: "They compile incident classification, timeline, diffs, links, artifacts, and reporting guidance into submission-ready output.",
  },
  {
    q: "Is this built for agencies?",
    a: "Yes. Portfolio workflows, role controls, and client-safe reporting are core capabilities.",
  },
  {
    q: "Can it work across many locations?",
    a: "Yes. The workflow is designed for multi-location portfolios and cross-account patterns.",
  },
  {
    q: "How are incidents prioritized?",
    a: "Severity and business impact drive owner assignment, task flow, and SLA handling.",
  },
  {
    q: "How is this different from Birdeye, Yext, SOCi, Reputation, or Local Falcon?",
    a: "Those are not purpose-built as proof-first business identity incident response systems.",
  },
  {
    q: "Do you take over our account?",
    a: "No. You maintain control while the platform supports detection, proof, and workflow execution.",
  },
  {
    q: "Can this help with fake reviews, extortion, and impersonation?",
    a: "Yes. These are core incident classes with dedicated detection and response workflows.",
  },
];

export const resourceTopics = [
  "Google Business Profile protection playbooks",
  "Listing hijack detection and escalation SOPs",
  "Review attack and extortion response frameworks",
  "Duplicate listing fraud investigation guides",
  "Profile suspension triage checklists",
  "Local identity governance templates",
];

export const microcopySamples = [
  "View sample evidence pack",
  "Open incident",
  "Export escalation-ready report",
  "Least-privilege connection",
  "Audit trail enabled",
  "Severity: critical",
  "Last verified 4 minutes ago",
  "No unresolved critical incidents",
  "Review spike detected",
  "Submission path recommended",
  "Drop screenshots or URLs here",
  "Connect your profile to start monitoring",
];
