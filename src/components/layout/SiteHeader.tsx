import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../content/siteContent";

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[rgba(246,248,251,0.92)] backdrop-blur-sm">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white font-semibold text-[#0f4c81]">
            TC
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-slate-900">TraceCharter</span>
            <span className="block text-xs text-slate-500">
              Business Identity Incident Response
            </span>
          </span>
        </Link>

        <button
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-20 w-full flex-col gap-4 border-b border-slate-200 bg-[rgba(246,248,251,0.98)] px-6 py-6 lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0`}
          aria-label="Primary"
        >
          {isHomePage ? (
            <>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={`/${item.href}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-slate-700 transition hover:text-[#0f4c81]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/#evidence-pack"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-white"
              >
                View Evidence Pack
              </Link>
              <Link
                to="/#consultation"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg bg-[#0f4c81] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0d416d]"
              >
                Request Consultation
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-700 transition hover:text-[#0f4c81]"
              >
                Home
              </Link>
              <Link
                to="/privacy-policy"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#0f4c81] transition hover:text-[#0d416d]"
              >
                Privacy Policy
              </Link>
              <Link
                to="/#consultation"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg bg-[#0f4c81] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0d416d]"
              >
                Request Consultation
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
