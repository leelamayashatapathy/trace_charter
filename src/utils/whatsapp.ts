const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
const configuredMessage =
  import.meta.env.VITE_WHATSAPP_MESSAGE ??
  "Hi TraceCharter, I want to talk to sales about incident response.";

function normalizePhone(value: string | undefined) {
  if (!value) {
    return "";
  }
  return value.replace(/\D/g, "");
}

export function getWhatsAppHref() {
  const normalizedNumber = normalizePhone(rawNumber);
  if (!normalizedNumber) {
    return null;
  }

  const encodedMessage = encodeURIComponent(configuredMessage);
  return `https://wa.me/${normalizedNumber}?text=${encodedMessage}`;
}
