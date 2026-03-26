import { getWhatsAppHref } from "../../utils/whatsapp";

function SiteFooter() {
  const whatsappHref = getWhatsAppHref();

  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="container-shell flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:justify-between">
        <p>TraceCharter | Business Identity Incident Response</p>
        <p>Proof-first response for listing abuse, review attacks, and identity incidents.</p>
        {whatsappHref ? (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            WhatsApp sales chat
          </a>
        ) : null}
      </div>
    </footer>
  );
}

export default SiteFooter;
