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

  // Full desktop nav only renders at xl+ (1280px). Below that, screens don't
  // have room for 8 links + phone + a pill button on one line without
  // wrapping, so they get the hamburger menu instead — that's intentional,
  // not a bug: a squeezed nav that wraps mid-label looks broken, a clean
  // hamburger at "tablet-ish" widths doesn't.
  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur border-b transition-shadow ${
        scrolled ? "border-slate-200 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-3 transition-all ${scrolled ? "h-16" : "h-18"}`}>
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-700 text-white shrink-0">
              <GraduationCap size={20} />
            </span>
            <span className="leading-tight whitespace-nowrap">
              <span className="block font-display font-bold text-ink-900 text-[15px]">
                {school.shortName}
              </span>
              <span className="hidden sm:block text-[10.5px] tracking-wide uppercase text-ink-500">
                Matriculation School
              </span>
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5 mx-2">
            {navLinks.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button className="flex items-center gap-1 px-2.5 py-2 text-[13.5px] font-medium text-ink-700 hover:text-brand-700 rounded-lg whitespace-nowrap">
                    {item.label} <ChevronDown size={13} />
                  </button>
                  <AnimatePresence>
                    {aboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full pt-2 w-56 z-10"
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
                  className="relative px-2.5 py-2 text-[13.5px] font-medium rounded-lg whitespace-nowrap"
                >
                  {({ isActive }) => (
                    <>
                      <span className={isActive ? "text-brand-700" : "text-ink-700 hover:text-brand-700"}>
                        {item.label}
                      </span>
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-underline"
                          className="absolute left-2.5 right-2.5 -bottom-0.5 h-0.5 rounded-full bg-brand-700"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${school.phone.replace(/\s/g, "")}`}
              className="hidden 2xl:flex items-center gap-1.5 text-[13px] font-medium text-ink-700 hover:text-brand-700 whitespace-nowrap"
            >
              <Phone size={15} /> {school.phone}
            </a>
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-brand-700 hover:bg-brand-600 text-white text-[13.5px] font-semibold px-5 py-2.5 whitespace-nowrap transition-colors"
            >
              Enquire for Admission
            </motion.button>
          </div>

          <button
            className="xl:hidden p-2 text-ink-900 shrink-0"
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
            className="xl:hidden border-t border-slate-200 bg-white overflow-hidden"
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
              <a
                href={`tel:${school.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 py-2 text-sm font-medium text-ink-700"
              >
                <Phone size={15} /> {school.phone}
              </a>
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
