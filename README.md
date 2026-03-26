# TraceCharter Website

Production-style React + Vite frontend with a backend demo-request API.

## What is implemented
- Frontend demo form submission with loading/success/error states
- Backend `POST /api/book-demo`
- Request validation with `zod`
- Rate limiting with `express-rate-limit`
- CAPTCHA verification using Cloudflare Turnstile
- CRM delivery support (HubSpot, Salesforce, Pipedrive)
- Optional email delivery via Resend
- Structured JSON logging

## Step-by-step setup
1. Install dependencies:
   - `npm install`
2. Create local env file from template:
   - Copy values from `.env.example` into `.env`
3. Configure minimum required variables:
   - `ALLOWED_ORIGIN=http://localhost:3000`
4. CAPTCHA is disabled by default. Enable only when needed:
   - Frontend: `VITE_CAPTCHA_ENABLED=true` + `VITE_TURNSTILE_SITE_KEY`
   - Backend: `CAPTCHA_ENABLED=true` + `CAPTCHA_SECRET_KEY`
5. Configure at least one destination:
   - CRM: `CRM_PROVIDER` + provider credentials
   - or Email: `RESEND_API_KEY`, `DEMO_TO_EMAIL`
6. Optional: configure WhatsApp sales chat:
   - `VITE_WHATSAPP_NUMBER` in international format (digits only), e.g. `919876543210`
   - `VITE_WHATSAPP_MESSAGE` for the prefilled chat message
7. Start frontend + backend together:
   - `npm run dev`
8. Open `http://localhost:3000` and submit the Book Demo form.

## Scripts
- `npm run dev`: run Vite client + API server concurrently
- `npm run dev:client`: run frontend only
- `npm run dev:server`: run backend only (watch mode)
- `npm run build`: build frontend
- `npm run lint`: run ESLint

## API contract
### `POST /api/book-demo`
Request JSON:
```json
{
  "workEmail": "name@company.com",
  "companyName": "Acme Inc",
  "role": "Director of Operations",
  "locationsManaged": 120,
  "primaryConcern": "Listing hijack / malicious edits",
  "notes": "Need faster triage and escalation quality",
  "captchaToken": "turnstile-token (optional, only when CAPTCHA is enabled)"
}
```

Success response:
```json
{
  "ok": true,
  "message": "Demo request received. Our team will contact you shortly.",
  "requestId": "uuid",
  "integrationResult": {
    "emailDelivered": true,
    "crmDelivered": true,
    "crmProvider": "hubspot"
  }
}
```
