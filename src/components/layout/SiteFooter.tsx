import { Link } from "react-router-dom";

function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="container-shell flex flex-col gap-4 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-1">
          <p>TraceCharter | Business Identity Incident Response</p>
          <p>Evidence-first recovery for listing abuse, review attacks, and identity incidents.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/privacy-policy"
            className="font-semibold text-slate-600 transition hover:text-[#0f4c81]"
          >
            Privacy Policy
          </Link>
          <Link to="/#consultation" className="font-semibold text-[#0f4c81] hover:text-[#0d416d]">
            Request consultation
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
