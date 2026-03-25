# TraceCharter Website Blueprint

## 1. Brand positioning summary
TraceCharter is a security-style incident response platform for public business identity surfaces, starting with Google Business Profile.  
It helps teams detect suspicious listing or review incidents quickly, preserve forensic evidence, run structured response workflows, and protect revenue.

## 2. Category statement
Primary category: **Business Identity Incident Response**  
Supporting phrases:
- Local Listing Incident Response
- Incident Response for Google Business Profile
- Business Identity Protection for Local Search
- Proof-first response for listing abuse

## 3. Messaging architecture
- Core promise: Fast detection + structured proof + response workflow + revenue protection
- Wedge: Incident response for Google Business Profile and local listings
- Problem frame: Local listings are revenue infrastructure, not marketing metadata
- Outcome frame: Faster triage, stronger submissions, lower operational chaos, reduced lead leakage
- Credibility frame: Evidence-led workflow, audit trails, least-privilege access, realistic promises

## 4. Brand voice guidance
- Executive-grade, specific, and operational
- Calm urgency without hype
- Security-aware language
- Clear boundaries: no guaranteed removals/reinstatements
- No SEO-agency framing, no generic AI-first claims

## 5. Full homepage wireframe
- Sticky header: Product, Solutions, Why Us, Security, Resources, Pricing, Book Demo
- Hero: category statement, explanatory subheadline, dual CTA, product console visual
- Trust strip: multi-location, auditability, evidence packs, security posture
- Problem section: revenue and trust damage scenarios
- Incident types: 8-card operational taxonomy
- How it works: Detect -> Preserve -> Case -> Severity -> Evidence pack -> Escalate -> Track -> Review
- Capabilities grid: 8 modules
- Why different: contrast with sync/review/alarm/manual/ticket alternatives
- Evidence pack section: signature visual and itemized contents
- Security section: controls and transparent access model
- Solutions by ICP: multi-location, agencies, high-risk verticals, enterprise ops
- Impact section: decision-maker outcomes
- Pricing section: Response / Portfolio / Enterprise
- FAQ section: trust and objection handling
- Resources section: content hub strategy + microcopy samples
- Final CTA + form

## 6. Full homepage copy
Implemented in `src/App.tsx` and content-driven from `src/content/siteContent.ts`, including all required sections and enterprise-focused positioning.

## 7. Navigation copy
- Product
- Solutions
- Why Us
- Security
- Resources
- Pricing
- View Evidence Pack
- Book Demo

## 8. CTA copy
- Book a Demo
- See the Workflow
- View Evidence Pack
- View Sample Evidence Pack
- Talk to Sales
- Request Demo and Workflow Review

## 9. Security/trust copy
- Least-privilege OAuth connection model
- Encrypted token handling and key controls
- Tenant isolation and strict data segregation
- Audit logs for critical actions and exports
- Role-based access control
- Customer-controlled retention windows
- Minimal evidence retention posture
- Transparent access and revocation
- Human-in-the-loop escalation workflows

## 10. FAQ copy
Implemented with 12 trust-building FAQs covering:
- Category clarity (not local SEO)
- No guaranteed external enforcement outcomes
- Initial platform scope
- Access model
- Data handling
- Evidence pack workflow
- Agency and multi-location support
- Prioritization model
- Competitive differentiation
- Account control boundaries
- Coverage for fake reviews, extortion, and impersonation

## 11. SEO metadata
Implemented in `index.html`:
- Optimized title and description
- High-intent keyword meta
- Open Graph title/description/type
- Twitter card/title/description

## 12. Recommended H1/H2/H3 structure
- H1: Incident response for the public business identity your revenue depends on.
- H2 groups:
  - Revenue-critical infrastructure
  - Incident types
  - How it works
  - Product capabilities
- Why we're different
  - Signature evidence pack workflow
  - Security and trust controls
  - Solutions by ICP
  - Business impact
  - Pricing
  - FAQ
  - Resources
  - Final CTA
- H3: module, card, and scenario-level specificity

## 13. Schema recommendations
Implemented in `src/App.tsx`:
- `SoftwareApplication` schema
- `FAQPage` schema

Recommended next additions:
- `Organization`
- `BreadcrumbList` if multi-page docs/resource hub is added
- `Article` schema for content hub posts

## 14. Internal content hub / blog strategy
Core pillar tracks:
- GBP protection playbooks
- Listing hijack and impersonation response SOPs
- Review attack and extortion response frameworks
- Duplicate listing fraud investigations
- Suspension triage workflows
- Governance, auditability, and response maturity

## 15. UI microcopy
Implemented sample operational microcopy:
- View sample evidence pack
- Open incident
- Export escalation-ready report
- Audit trail enabled
- Severity: critical
- Last verified 4 minutes ago
- Review spike detected
- Submission path recommended
- Connect your profile to start monitoring

## 16. Product screenshot / mockup guidance
- Show alert feed with severity labels
- Show before/after listing diff panel
- Show case timeline with owners and tasks
- Show evidence export action strip
- Use calm, operational UI with restrained accent color
- Avoid crowded "marketing dashboard" visual noise

## 17. Conversion notes
- Primary conversion: demo request
- Secondary conversion: evidence pack preview
- Form uses trust-aware fields and reassurance copy
- CTA hierarchy is consistent across header, hero, evidence, and final section

## 18. Visual design system guidance
- Palette: deep neutral base with restrained blue accent
- Typography: Manrope + IBM Plex Mono
- Spatial rhythm: high whitespace, strong card hierarchy
- Motion: subtle fade/stagger only
- Tone: premium, calm, security-oriented

## 19. Mobile UX notes
- Sticky nav with mobile menu
- Responsive section spacing and card grids
- Form fields and CTA buttons optimized for thumb targets
- No dense table-only layouts
- Core incident workflow remains scannable on small screens

## 20. Final quality-control pass
Checklist status:
- New category defined clearly: **Yes**
- Not positioned as local SEO/reputation marketing tool: **Yes**
- Premium enterprise visual language: **Yes**
- Trust through specificity and realistic claims: **Yes**
- Evidence packs as signature differentiator: **Yes**
- Alert + case + proof workflow visible: **Yes**
- Decision-maker-ready copy: **Yes**
- Agency + multi-location + enterprise operators addressed: **Yes**
