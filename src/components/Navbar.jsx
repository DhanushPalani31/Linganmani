import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, GraduationCap } from "lucide-react";
import { navLinks, school } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-700 text-white">
              <GraduationCap size={22} />
            </span>
            <span className="leading-tight">
              <span className="block font-display font-bold text-ink-900 text-[15px]">
                {school.shortName}
              </span>
              <span className="block text-[11px] tracking-wide uppercase text-ink-500">
                Matriculation School
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink-700 hover:text-brand-700 rounded-lg">
                    {item.label} <ChevronDown size={14} />
                  </button>
                  {aboutOpen && (
                    <div className="absolute left-0 top-full pt-2 w-56">
                      <div className="bg-white rounded-xl shadow-lg border border-slate-100 py-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.label}
                            to={c.to}
                            className="block px-4 py-2 text-sm text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg ${
                      isActive ? "text-brand-700" : "text-ink-700 hover:text-brand-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${school.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm font-medium text-ink-700 hover:text-brand-700"
            >
              <Phone size={16} /> {school.phone}
            </a>
            <Link
              to="/contact"
              className="rounded-full bg-brand-700 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              Enquire for Admission
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-ink-900"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-4 space-y-1">
          {navLinks.flatMap((item) =>
            item.children
              ? item.children.map((c) => (
                  <Link
                    key={c.label}
                    to={c.to}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm font-medium text-ink-700"
                  >
                    {c.label}
                  </Link>
                ))
              : [
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm font-medium text-ink-700"
                  >
                    {item.label}
                  </Link>,
                ]
          )}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-2 rounded-full bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 text-center"
          >
            Enquire for Admission
          </Link>
        </div>
      )}
    </header>
  );
}
