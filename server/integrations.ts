import { log } from "./logger";
import type { DemoLead, IntegrationResult } from "./types";

async function sendToHubSpot(lead: DemoLead) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
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
        jobtitle: lead.role,
        hs_lead_status: "NEW",
        website: "tracecharter.com",
        message: `Locations: ${lead.locationsManaged}\nConcern: ${lead.primaryConcern}\nNotes: ${lead.notes ?? ""}`,
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

async function sendToSalesforce(lead: DemoLead) {
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
        LastName: lead.role || "Demo Request",
        Company: lead.companyName,
        Email: lead.workEmail,
        Description: `Locations: ${lead.locationsManaged}\nConcern: ${lead.primaryConcern}\nNotes: ${lead.notes ?? ""}`,
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

async function sendToPipedrive(lead: DemoLead) {
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
      title: `Book Demo - ${lead.companyName}`,
      person_id: personId,
      expected_close_date: null,
      label_ids: [],
      owner_id: null,
      value: null,
      note: `Role: ${lead.role}\nLocations: ${lead.locationsManaged}\nConcern: ${lead.primaryConcern}\nNotes: ${lead.notes ?? ""}`,
    }),
  });

  if (!leadResponse.ok) {
    const errorText = await leadResponse.text();
    log("error", "crm.pipedrive_lead_failed", { status: leadResponse.status, errorText });
    return false;
  }

  return true;
}

async function sendToCrm(lead: DemoLead): Promise<Pick<IntegrationResult, "crmDelivered" | "crmProvider">> {
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

async function sendEmail(lead: DemoLead) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.DEMO_TO_EMAIL;
  const from = process.env.DEMO_FROM_EMAIL ?? "TraceCharter <onboarding@resend.dev>";

  if (!apiKey || !to) {
    log("warn", "email.skipped_missing_config", {
      hasApiKey: Boolean(apiKey),
      hasToAddress: Boolean(to),
    });
    return false;
  }

  const html = `
    <h2>New Demo Request</h2>
    <p><strong>Email:</strong> ${lead.workEmail}</p>
    <p><strong>Company:</strong> ${lead.companyName}</p>
    <p><strong>Role:</strong> ${lead.role}</p>
    <p><strong>Locations:</strong> ${lead.locationsManaged}</p>
    <p><strong>Primary concern:</strong> ${lead.primaryConcern}</p>
    <p><strong>Notes:</strong> ${lead.notes ?? "-"}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: `Demo request: ${lead.companyName}`,
      html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    log("error", "email.resend_failed", { status: response.status, errorText });
    return false;
  }

  return true;
}

export async function deliverLead(lead: DemoLead): Promise<IntegrationResult> {
  const [emailDelivered, crmStatus] = await Promise.all([sendEmail(lead), sendToCrm(lead)]);

  return {
    emailDelivered,
    crmDelivered: crmStatus.crmDelivered,
    crmProvider: crmStatus.crmProvider,
  };
}
