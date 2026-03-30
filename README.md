# TraceCharter Website

React + Vite frontend with an Express API, prepared for a single production deployment on `tracecharter.com`.

## Production shape

- `npm run build` builds the frontend into `dist/`
- `npm start` runs the Express server
- the Express server serves the built frontend and the API from the same process
- consultation submissions post to `POST /api/request-consultation`

## What is implemented

- Homepage frontend with consultation intake flow
- Backend `POST /api/request-consultation`
- Request validation with `zod`
- Rate limiting with `express-rate-limit`
- CAPTCHA verification using Cloudflare Turnstile
- CRM delivery support for HubSpot, Salesforce, and Pipedrive
- Optional email delivery via Resend for both internal alerts and submitter confirmations
- Structured JSON logging
- Production static serving for the Vite build

## Local development

1. Install dependencies:
   - `npm install`
2. Create local env file from template:
   - copy `.env.example` to `.env`
3. For local dev, set:
   - `NODE_ENV=development`
   - `ALLOWED_ORIGIN=http://localhost:3000`
4. Start frontend + backend together:
   - `npm run dev`
5. Open `http://localhost:3000`

## Production deployment

1. Set production env values from `.env.example`
2. Minimum required values:
   - `SITE_URL=https://tracecharter.com`
   - `VITE_SITE_URL=https://tracecharter.com`
   - `ALLOWED_ORIGIN=https://tracecharter.com,https://www.tracecharter.com`
3. Configure at least one delivery destination:
   - CRM: `CRM_PROVIDER` plus provider credentials
   - or email: `RESEND_API_KEY` and `CONSULTATION_TO_EMAIL`
   - submitter confirmations use `RESEND_API_KEY` and the submitted `workEmail`
4. Enable CAPTCHA only when you have both keys:
   - `VITE_CAPTCHA_ENABLED=true`
   - `VITE_TURNSTILE_SITE_KEY=...`
   - `CAPTCHA_ENABLED=true`
   - `CAPTCHA_SECRET_KEY=...`
5. Build the app:
   - `npm run build`
6. Start the production server:
   - `npm start`

The same Node process will serve both the site and the API, which is the intended one-shot deployment path.

## VPS deployment with Nginx

Recommended layout:

- app code: `/var/www/tracecharter/current`
- env file: `/etc/tracecharter/tracecharter.env`
- Node app port: `8787`
- Nginx reverse proxy in front of the app

### 1. Copy the repo

```bash
sudo mkdir -p /var/www/tracecharter
sudo chown -R $USER:$USER /var/www/tracecharter
git clone <your-repo-url> /var/www/tracecharter/current
cd /var/www/tracecharter/current
```

### 2. Create the production env file

```bash
sudo mkdir -p /etc/tracecharter
sudo cp .env.example /etc/tracecharter/tracecharter.env
sudo nano /etc/tracecharter/tracecharter.env
```

Set at minimum:

- `SITE_URL=https://tracecharter.com`
- `VITE_SITE_URL=https://tracecharter.com`
- `ALLOWED_ORIGIN=https://tracecharter.com,https://www.tracecharter.com`
- `CONSULTATION_TO_EMAIL` or CRM credentials
- CAPTCHA keys only if enabling CAPTCHA

### 3. Install and build

```bash
npm install
cp /etc/tracecharter/tracecharter.env .env
npm run build
```

### 4. Install the systemd service

```bash
sudo cp deploy/systemd/tracecharter.service /etc/systemd/system/tracecharter.service
sudo systemctl daemon-reload
sudo systemctl enable tracecharter
sudo systemctl start tracecharter
sudo systemctl status tracecharter
```

### 5. Install the Nginx config

```bash
sudo cp deploy/nginx/tracecharter.conf /etc/nginx/sites-available/tracecharter.conf
sudo ln -s /etc/nginx/sites-available/tracecharter.conf /etc/nginx/sites-enabled/tracecharter.conf
sudo nginx -t
sudo systemctl reload nginx
```

### 6. Install SSL

Example with Certbot:

```bash
sudo certbot --nginx -d tracecharter.com -d www.tracecharter.com
```

## PM2 alternative

If you prefer PM2 over systemd:

```bash
npm install -g pm2
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

## Scripts

- `npm run dev`: run Vite client and API server together
- `npm run dev:client`: run frontend only
- `npm run dev:server`: run backend only in watch mode
- `npm run build`: typecheck and build the frontend
- `npm start`: run the production server
- `npm run lint`: run ESLint

## API contract

### `POST /api/request-consultation`

Request JSON:

```json
{
  "workEmail": "name@company.com",
  "companyName": "Acme Inc",
  "serviceCategory": "Locksmith",
  "locationsManaged": 12,
  "incidentType": "Listing hijack / malicious edits",
  "phoneDiverted": "Yes",
  "notes": "Our main number was replaced on three listings.",
  "captchaToken": "turnstile-token"
}
```

Success response:

```json
{
  "ok": true,
  "message": "Consultation request received. Our team will contact you shortly.",
  "requestId": "uuid",
  "integrationResult": {
    "internalEmailDelivered": true,
    "confirmationEmailDelivered": true,
    "crmDelivered": true,
    "crmProvider": "hubspot"
  }
}
```
