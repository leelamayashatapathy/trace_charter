export type Item = {
  title: string;
  description: string;
  detail?: string;
};

export const navItems = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Why Us", href: "#why-us" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
];

export const trustSignals: Item[] = [
  {
    title: "Designed for emergency services",
    description: "Designed for locksmith, HVAC, plumbing, and towing operators under live call-flow pressure.",
  },
  {
    title: "Tamper-evident evidence packs",
    description: "Submission-ready artifacts with timestamps, diffs, and reviewer-ready context.",
  },
  {
    title: "Chain-of-custody by default",
    description: "Case actions, evidence handling, and ownership changes are logged end to end.",
  },
  {
    title: "Cross-platform recovery coverage",
    description: "Guided response across Google, Apple, Bing, Yelp, Facebook, and other major listing surfaces.",
  },
  {
    title: "No credential takeover",
    description: "We never ask for your primary account login or attempt to control your account.",
  },
  {
    title: "Least-privilege access model",
    description: "Scoped permissions, explicit access, revocation controls, and retention guardrails.",
  },
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
    impact: "Emergency calls are diverted and booked jobs disappear first.",
    help: "Capture before/after diffs, preserve tamper-evident artifacts, and open a high-severity recovery case.",
  },
  {
    title: "Fake duplicate listings",
    what: "Unauthorized duplicates compete for your legitimate demand.",
    impact: "Searchers call the wrong operator and your verified listing loses urgent demand.",
    help: "Cluster duplicates, preserve evidence, and create appeal-ready exports for fast recovery.",
  },
  {
    title: "Impersonation / brand fraud",
    what: "Actors mimic your brand identity in local search.",
    impact: "Customers are exposed to scams and brand trust erodes quickly.",
    help: "Capture immutable snapshots, linked entities, and chain-of-custody notes for escalation.",
  },
  {
    title: "Review bombing",
    what: "Abnormal negative review bursts target locations.",
    impact: "Ratings drop when customers are deciding under time pressure.",
    help: "Document the spike, thread supporting evidence, and track response outcomes by location.",
  },
  {
    title: "Review extortion",
    what: "Bad actors demand payment or action to remove harmful reviews.",
    impact: "Teams face coercion, reputational damage, and legal pressure at once.",
    help: "Preserve chronology, communications, and report-ready proof for platform and legal review.",
  },
  {
    title: "Suspension / visibility restrictions",
    what: "Profiles lose visibility, verification, or capabilities.",
    impact: "Inbound calls can collapse overnight in affected service areas.",
    help: "Run structured triage and maintain the documentation needed for appeal loops.",
  },
  {
    title: "Unauthorized owner / access drift",
    what: "Unexpected ownership or access changes occur.",
    impact: "Recovery slows down when the right team no longer controls the account.",
    help: "Flag drift, assign owners, and preserve a complete access timeline for internal review.",
  },
  {
    title: "Knowledge panel misinformation",
    what: "Public details become inaccurate or misleading.",
    impact: "Customers reach bad numbers, wrong hours, or misleading service details.",
    help: "Track misinformation state and route correction playbooks with defensible evidence.",
  },
];

export const workflowSteps = [
  "Detect",
  "Document",
  "Restore",
];

export const capabilities: Item[] = [
  {
    title: "Monitoring and alerts",
    description: "Watch high-risk listing and review events with triage focused on business impact.",
    detail: "Prioritized for urgent-service call-flow risk, not dashboard noise.",
  },
  {
    title: "Forensic change history",
    description: "Immutable before/after records, timestamps, and artifact collection.",
    detail: "Defensible records for external reporting and internal review.",
  },
  {
    title: "Case management",
    description: "Severity, owners, SLAs, tasks, and timeline in one system.",
    detail: "Operate incidents consistently across branches, regions, and partners.",
  },
  {
    title: "Evidence pack generation",
    description: "Submission-ready reports built from case context and source artifacts.",
    detail: "Includes hash-ready evidence handling and chain-of-custody support.",
  },
  {
    title: "Cross-platform appeal guidance",
    description: "Incident-specific reporting path guidance across major listing platforms.",
    detail: "Human-in-the-loop support without false guarantees.",
  },
  {
    title: "Threat intelligence",
    description: "Pattern detection across locations, duplicates, and related accounts.",
    detail: "Identify systemic abuse, not just isolated incidents.",
  },
  {
    title: "Portfolio dashboards",
    description: "Executive risk posture by region, market, and brand.",
    detail: "Clear view into unresolved critical incidents and repeated exposure.",
  },
  {
    title: "Security and audit controls",
    description: "RBAC, access logs, and configurable retention.",
    detail: "Enterprise trust without taking over customer credentials.",
  },
];

export const differenceCards = [
  {
    alternative: "Listing sync and monitoring tools",
    limitation: "They can flag changes, but they rarely preserve tamper-evident evidence or create a defensible recovery record.",
    approach: "TraceCharter captures before-and-after proof, chain-of-custody context, and recovery guidance in one workflow.",
  },
  {
    alternative: "Review and reputation suites",
    limitation: "They are built for response queues, not urgent-service incidents where fake reviews or impersonation can disrupt trust fast.",
    approach: "We treat review abuse as an incident with severity, evidence handling, and a structured path to escalation.",
  },
  {
    alternative: "Alert-only alarms",
    limitation: "They notify teams that something changed, but leave screenshots, documentation, and appeal prep to manual effort.",
    approach: "We combine detection, evidence packs, case operations, and guided recovery for urgent-service brands under pressure.",
  },
  {
    alternative: "Spreadsheets and ad hoc escalation",
    limitation: "Fragmented ownership slows response when a bad phone number or fake duplicate is already taking calls.",
    approach: "TraceCharter gives teams a single incident record with owners, timelines, evidence, and escalation discipline.",
  },
  {
    alternative: "Ticket-only workflows",
    limitation: "Tickets track requests, but they do not preserve the forensic context urgent-service operators need to recover credibility fast.",
    approach: "We maintain a unified incident record with artifacts, narrative context, task flow, and outcome tracking.",
  },
];

export const evidencePackItems = [
  "Cover page with incident summary",
  "Business and location metadata",
  "Incident classification and severity rationale",
  "Chain-of-custody log",
  "Chronological timeline of events",
  "Before/after listing diffs",
  "Timestamped screenshots and source artifacts",
  "SHA-256 hash manifest for submitted evidence",
  "Suspicious review URLs and linked entities",
  "Potential attacker identifiers",
  "Reviewer-ready narrative context",
  "Platform-specific reporting guidance",
];

export const securityControls = [
  "Least-privilege OAuth connection model",
  "We never ask for your primary account login",
  "Encrypted token handling and key controls",
  "Tenant isolation and strict data segregation",
  "Audit logs for critical actions and exports",
  "Role-based access control with scoped permissions",
  "Customer-controlled retention windows",
  "Minimal evidence retention posture",
  "Transparent access model and revocation",
  "Cross-platform response workflows for Google, Apple, Bing, Yelp, and Facebook",
  "Human-in-the-loop escalation workflows",
];

export const solutionCards = [
  {
    title: "Locksmith & Emergency Services",
    pain: "Hijacked numbers and fake duplicates can steal urgent calls in minutes.",
    outcome: "Recover call flow quickly with evidence-first escalation support.",
  },
  {
    title: "HVAC & Plumbing",
    pain: "Peak-season demand is vulnerable to hijacks, misinformation, and review abuse.",
    outcome: "Protect reputation and restore verified listing control with defensible proof.",
  },
  {
    title: "Towing & Roadside Assistance",
    pain: "Impersonation and duplicate listings redirect high-value emergency dispatch calls.",
    outcome: "Regain visibility and document abuse patterns across affected markets.",
  },
  {
    title: "Agencies",
    pain: "Client trust is exposed when incidents are tracked in screenshots and inboxes.",
    outcome: "Deliver consistent response workflows and stronger client-safe reporting.",
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
    name: "Self-Service Kit",
    target: "Teams that need guided evidence collection and recovery templates",
    points: [
      "Evidence pack generator",
      "Tamper-evident documentation templates",
      "Incident intake and triage checklist",
      "Platform-specific recovery guidance",
    ],
  },
  {
    name: "Incident Response",
    target: "Operators handling an active listing, review, or impersonation incident",
    points: [
      "Single-incident response workflow",
      "Case timeline and owner assignment",
      "Submission-ready evidence pack export",
      "Priority consultation support",
    ],
  },
  {
    name: "Managed Protection",
    target: "High-risk urgent-service brands and agency portfolios",
    points: [
      "Continuous monitoring across locations",
      "Unlimited incident coordination",
      "Cross-location threat review and reporting",
      "Governance, retention, and access controls",
    ],
  },
];

export const faqItems = [
  {
    q: "Is this a local SEO tool?",
    a: "No. This is Business Identity Incident Response for listings and review abuse.",
  },
  {
    q: "How fast do you begin triage?",
    a: "We aim to begin triage within 24 hours so urgent-service operators can assess call-flow risk quickly.",
  },
  {
    q: "Which service categories do you specialize in?",
    a: "We focus on high-risk urgent-service brands, especially locksmith, HVAC, plumbing, towing, and roadside operators.",
  },
  {
    q: "Do you require our account credentials?",
    a: "No. We use least-privilege, revocable access and never ask for your primary account login.",
  },
  {
    q: "Can you help if our phone line or tracking number was replaced?",
    a: "Yes. Phone-number replacement is a core incident class because it can divert urgent calls immediately.",
  },
  {
    q: "Do you guarantee removals or reinstatements?",
    a: "No. External platform enforcement is outside our control. We improve response quality, speed, and defensibility.",
  },
  {
    q: "What platforms do you support?",
    a: "Google Business Profile is the primary starting surface, with workflows designed to expand across Apple, Bing, Yelp, and Facebook.",
  },
  {
    q: "How do evidence packs work?",
    a: "They compile classification, timeline, diffs, artifacts, hashes, and reporting guidance into submission-ready output.",
  },
  {
    q: "What access is required?",
    a: "Least-privilege access with transparent, revocable permissions and clear retention controls.",
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
    q: "Can this help with fake reviews, extortion, and impersonation?",
    a: "Yes. These are core incident classes with dedicated detection, documentation, and recovery workflows.",
  },
];

export const resourceTopics = [
  "How to detect listing hijacks before calls are diverted",
  "Duplicate listing response guides for locksmith, HVAC, and towing brands",
  "Review attack and extortion response frameworks",
  "Profile suspension triage checklists for urgent-service operators",
  "Evidence-pack preparation guides for platform appeals",
  "Call-flow protection and local identity governance templates",
];

export const proofPoints = [
  {
    title: "Locksmith duplicate recovery",
    detail: "A duplicate listing was documented, escalated, and contained before it could keep siphoning urgent calls.",
  },
  {
    title: "HVAC review attack triage",
    detail: "Coordinated negative reviews were organized into an evidence pack so the operator could respond with a clear timeline and artifacts.",
  },
  {
    title: "Towing phone-number diversion response",
    detail: "A diverted dispatch line was captured with before-and-after proof and moved into a structured recovery workflow.",
  },
];
