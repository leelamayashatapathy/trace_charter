import { log } from "./logger";
import type { ConsultationLead, IntegrationResult } from "./types";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function sendResendEmail({
  apiKey,
  from,
  to,
  subject,
  html,
}: {
  apiKey: string;
  from: string;
  to: string | string[];
  subject: string;
  html: string;
}) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend API ${response.status}: ${errorText}`);
  }
}

async function sendToHubSpot(lead: ConsultationLead) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  const siteUrl = process.env.SITE_URL ?? "https://tracecharter.com";
  if (!token) {
    return false;
  }

  const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      properties: {
        email: lead.workEmail,
        company: lead.companyName,
        jobtitle: lead.serviceCategory,
        hs_lead_status: "NEW",
        website: siteUrl,
        message: `Service category: ${lead.serviceCategory}\nLocations: ${lead.locationsManaged}\nIncident type: ${lead.incidentType}\nPhone diverted: ${lead.phoneDiverted}\nNotes: ${lead.notes ?? ""}`,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    log("error", "crm.hubspot_failed", { status: response.status, errorText });
    return false;
  }

  return true;
}

async function sendToSalesforce(lead: ConsultationLead) {
  const instanceUrl = process.env.SALESFORCE_INSTANCE_URL;
  const accessToken = process.env.SALESFORCE_ACCESS_TOKEN;
  if (!instanceUrl || !accessToken) {
    return false;
  }

  const response = await fetch(
    `${instanceUrl}/services/data/v61.0/sobjects/Lead`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        LastName: lead.serviceCategory || "Consultation Request",
        Company: lead.companyName,
        Email: lead.workEmail,
        Description: `Service category: ${lead.serviceCategory}\nLocations: ${lead.locationsManaged}\nIncident type: ${lead.incidentType}\nPhone diverted: ${lead.phoneDiverted}\nNotes: ${lead.notes ?? ""}`,
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    log("error", "crm.salesforce_failed", { status: response.status, errorText });
    return false;
  }

  return true;
}

async function sendToPipedrive(lead: ConsultationLead) {
  const apiToken = process.env.PIPEDRIVE_API_TOKEN;
  const baseUrl = process.env.PIPEDRIVE_BASE_URL ?? "https://api.pipedrive.com/v1";
  if (!apiToken) {
    return false;
  }

  const personResponse = await fetch(`${baseUrl}/persons?api_token=${apiToken}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: lead.companyName,
      email: lead.workEmail,
    }),
  });

  if (!personResponse.ok) {
    const errorText = await personResponse.text();
    log("error", "crm.pipedrive_person_failed", { status: personResponse.status, errorText });
    return false;
  }

  const personJson = (await personResponse.json()) as { data?: { id?: number } };
  const personId = personJson.data?.id;
  if (!personId) {
    log("error", "crm.pipedrive_person_missing_id");
    return false;
  }

  const leadResponse = await fetch(`${baseUrl}/leads?api_token=${apiToken}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: `Consultation Request - ${lead.companyName}`,
      person_id: personId,
      expected_close_date: null,
      label_ids: [],
      owner_id: null,
      value: null,
      note: `Service category: ${lead.serviceCategory}\nLocations: ${lead.locationsManaged}\nIncident type: ${lead.incidentType}\nPhone diverted: ${lead.phoneDiverted}\nNotes: ${lead.notes ?? ""}`,
    }),
  });

  if (!leadResponse.ok) {
    const errorText = await leadResponse.text();
    log("error", "crm.pipedrive_lead_failed", { status: leadResponse.status, errorText });
    return false;
  }

  return true;
}

async function sendToCrm(
  lead: ConsultationLead,
): Promise<Pick<IntegrationResult, "crmDelivered" | "crmProvider">> {
  const provider = process.env.CRM_PROVIDER?.toLowerCase();
  if (!provider) {
    return { crmDelivered: false };
  }

  if (provider === "hubspot") {
    return { crmDelivered: await sendToHubSpot(lead), crmProvider: "hubspot" };
  }

  if (provider === "salesforce") {
    return { crmDelivered: await sendToSalesforce(lead), crmProvider: "salesforce" };
  }

  if (provider === "pipedrive") {
    return { crmDelivered: await sendToPipedrive(lead), crmProvider: "pipedrive" };
  }

  log("warn", "crm.unknown_provider", { provider });
  return { crmDelivered: false };
}

async function sendInternalNotificationEmail(lead: ConsultationLead) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONSULTATION_TO_EMAIL ?? process.env.DEMO_TO_EMAIL;
  const from =
    process.env.CONSULTATION_FROM_EMAIL ??
    process.env.DEMO_FROM_EMAIL ??
    "TraceCharter <no-reply@tracecharter.com>";

  if (!apiKey || !to) {
    log("warn", "email.skipped_missing_config", {
      hasApiKey: Boolean(apiKey),
      hasToAddress: Boolean(to),
    });
    return false;
  }

  const html = `
    <h2>New Consultation Request</h2>
    <p><strong>Email:</strong> ${escapeHtml(lead.workEmail)}</p>
    <p><strong>Company:</strong> ${escapeHtml(lead.companyName)}</p>
    <p><strong>Service category:</strong> ${escapeHtml(lead.serviceCategory)}</p>
    <p><strong>Locations:</strong> ${lead.locationsManaged}</p>
    <p><strong>Incident type:</strong> ${escapeHtml(lead.incidentType)}</p>
    <p><strong>Phone diverted:</strong> ${escapeHtml(lead.phoneDiverted)}</p>
    <p><strong>Notes:</strong> ${escapeHtml(lead.notes ?? "-")}</p>
  `;

  try {
    await sendResendEmail({
      apiKey,
      from,
      to,
      subject: `Consultation request: ${lead.companyName}`,
      html,
    });
    return true;
  } catch (error) {
    log("error", "email.internal_notification_failed", {
      error: error instanceof Error ? error.message : "Unknown error",
    });
    return false;
  }
}

async function sendSubmitterConfirmationEmail(lead: ConsultationLead) {
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.CONSULTATION_CONFIRMATION_FROM_EMAIL ??
    process.env.CONSULTATION_FROM_EMAIL ??
    process.env.DEMO_FROM_EMAIL ??
    "TraceCharter <no-reply@tracecharter.com>";

  if (!apiKey) {
    log("warn", "email.confirmation_skipped_missing_config", {
      hasApiKey: false,
    });
    return false;
  }

  const safeCompanyName = escapeHtml(lead.companyName);
  const safeServiceCategory = escapeHtml(lead.serviceCategory);
  const html = `
    <h2>We received your Trace Charter consultation request</h2>
    <p>Thanks for reaching out. This confirms that we received the request submitted for <strong>${safeCompanyName}</strong>.</p>
    <p><strong>Service category:</strong> ${safeServiceCategory}</p>
    <p><strong>Locations impacted:</strong> ${lead.locationsManaged}</p>
    <p>Our team will review the details and follow up using this email address if we need more information.</p>
  `;

  try {
    await sendResendEmail({
      apiKey,
      from,
      to: lead.workEmail,
      subject: "We received your Trace Charter consultation request",
      html,
    });
    return true;
  } catch (error) {
    log("error", "email.submitter_confirmation_failed", {
      email: lead.workEmail,
      error: error instanceof Error ? error.message : "Unknown error",
    });
    return false;
  }
}

export async function deliverLead(lead: ConsultationLead): Promise<IntegrationResult> {
  const [internalEmailDelivered, confirmationEmailDelivered, crmStatus] = await Promise.all([
    sendInternalNotificationEmail(lead),
    sendSubmitterConfirmationEmail(lead),
    sendToCrm(lead),
  ]);

  return {
    internalEmailDelivered,
    confirmationEmailDelivered,
    crmDelivered: crmStatus.crmDelivered,
    crmProvider: crmStatus.crmProvider,
  };
}
