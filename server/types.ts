export type DemoLead = {
  workEmail: string;
  companyName: string;
  role: string;
  locationsManaged: number;
  primaryConcern: string;
  notes?: string;
  captchaToken?: string;
};

export type IntegrationResult = {
  emailDelivered: boolean;
  crmDelivered: boolean;
  crmProvider?: "hubspot" | "salesforce" | "pipedrive";
};
