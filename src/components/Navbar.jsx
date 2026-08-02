import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ChevronDown, GraduationCap } from "lucide-react";
import { navLinks, school } from "../data/content";
import { useAdmissionModal } from "../context/AdmissionModalContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useAdmissionModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur border-b transition-shadow ${
        scrolled ? "border-slate-200 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className={`flex items-center justify-between py-3 transition-all ${scrolled ? "h-16" : "h-18"}`}>
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
                  <AnimatePresence>
                    {aboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full pt-2 w-56"
                      >
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
                      </motion.div>
                    )}
                  </AnimatePresence>
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
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-brand-700 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
            >
              Enquire for Admission
            </motion.button>
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-slate-200 bg-white overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
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
              <button
                onClick={() => {
                  setOpen(false);
                  openModal();
                }}
                className="w-full mt-2 rounded-full bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 text-center"
              >
                Enquire for Admission
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
