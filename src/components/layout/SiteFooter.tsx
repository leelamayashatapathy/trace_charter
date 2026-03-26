function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="container-shell flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:justify-between">
        <p>TraceCharter | Business Identity Incident Response</p>
        <p>Evidence-first recovery for listing abuse, review attacks, and identity incidents.</p>
        <a href="#consultation" className="font-semibold text-[#0f4c81] hover:text-[#0d416d]">
          Request consultation
        </a>
      </div>
    </footer>
  );
}

export default SiteFooter;
