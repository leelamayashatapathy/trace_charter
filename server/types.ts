export type ConsultationLead = {
  workEmail: string;
  companyName: string;
  serviceCategory: string;
  locationsManaged: number;
  incidentType: string;
  phoneDiverted: string;
  notes?: string;
  captchaToken?: string;
};

export type IntegrationResult = {
  internalEmailDelivered: boolean;
  confirmationEmailDelivered: boolean;
  crmDelivered: boolean;
  crmProvider?: "hubspot" | "salesforce" | "pipedrive";
};
