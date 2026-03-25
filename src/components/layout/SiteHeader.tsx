import { useState } from "react";
import { navItems } from "../../content/siteContent";

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[rgba(246,248,251,0.92)] backdrop-blur-sm">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white font-semibold text-[#0f4c81]">
            TC
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-slate-900">TraceCharter</span>
            <span className="block text-xs text-slate-500">
              Business Identity Incident Response
            </span>
          </span>
        </a>

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
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-slate-700 transition hover:text-[#0f4c81]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#evidence-pack"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-white"
          >
            View Evidence Pack
          </a>
          <a
            href="#demo"
            className="rounded-lg bg-[#0f4c81] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0d416d]"
          >
            Book Demo
          </a>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
