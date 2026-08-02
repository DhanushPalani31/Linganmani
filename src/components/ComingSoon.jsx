import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Hammer, ArrowLeft } from "lucide-react";
import Reveal from "./Reveal";
import { useAdmissionModal } from "../context/AdmissionModalContext";

/**
 * Placeholder for pages still being built. Keeps the same nav/footer shell
 * as the rest of the site so the layout reads as intentional, not broken.
 * Swap this out for the real page content when it's ready — nothing about
 * this component needs to be reused elsewhere.
 */
export default function ComingSoon({ title, description }) {
  const { openModal } = useAdmissionModal();

  return (
    <section className="bg-brand-50 min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-2xl px-5 lg:px-8 py-20 text-center">
        <Reveal>
          <motion.div
            initial={{ rotate: -8 }}
            animate={{ rotate: [-8, 8, -8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-2xl bg-brand-700 text-white grid place-items-center mx-auto mb-6"
          >
            <Hammer size={26} />
          </motion.div>
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">
            Coming Soon
          </span>
          <h1 className="mt-3 font-display font-extrabold text-3xl text-ink-900">{title}</h1>
          <p className="mt-4 text-ink-700">{description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 text-ink-900 font-semibold px-6 py-3 hover:bg-white transition-colors"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <button
              onClick={openModal}
              className="rounded-full bg-brand-700 hover:bg-brand-600 text-white font-semibold px-6 py-3 transition-colors"
            >
              Enquire for Admission
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
