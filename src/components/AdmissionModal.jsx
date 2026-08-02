import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2, Send } from "lucide-react";
import { school } from "../data/content";
import { useAdmissionModal } from "../context/AdmissionModalContext";

const CLASSES = ["LKG", "UKG", "Std I-V", "Std VI-VIII", "Std IX", "Std X"];

export default function AdmissionModal() {
  const { open, closeModal } = useAdmissionModal();
  const [form, setForm] = useState({ name: "", phone: "", cls: CLASSES[0] });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to a real form endpoint (Formspree, EmailJS, your own
    // /api route) before launch — it currently just shows a confirmation.
    setSent(true);
  }

  function handleClose() {
    closeModal();
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", phone: "", cls: CLASSES[0] });
    }, 300);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="relative bg-white rounded-3xl w-full max-w-md p-7 shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-5 right-5 text-ink-500 hover:text-ink-900"
            >
              <X size={20} />
            </button>

            {sent ? (
              <div className="text-center py-8">
                <CheckCircle2 className="mx-auto text-success-500" size={44} />
                <h3 className="mt-4 font-display font-semibold text-lg text-ink-900">
                  Enquiry received
                </h3>
                <p className="mt-2 text-sm text-ink-500">
                  The admissions office will call you back shortly. For anything urgent, call{" "}
                  {school.phone} directly.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 rounded-full bg-brand-700 hover:bg-brand-600 text-white text-sm font-semibold px-6 py-2.5"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">
                  Quick Admission Enquiry
                </span>
                <h3 className="mt-1 font-display font-bold text-xl text-ink-900">
                  Get a callback about admission
                </h3>
                <p className="mt-1.5 text-sm text-ink-500">
                  Just three details — the office will call you back with next steps.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Parent / Guardian name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
                  />
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
                  />
                  <select
                    value={form.cls}
                    onChange={(e) => setForm({ ...form, cls: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 bg-white"
                  >
                    {CLASSES.map((c) => (
                      <option key={c} value={c}>Enquiring for {c}</option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-brand-700 hover:bg-brand-600 text-white font-semibold py-3 text-sm transition-colors"
                  >
                    Request a Callback <Send size={15} />
                  </button>
                  <p className="text-center text-xs text-ink-500">
                    Prefer to talk now? Call{" "}
                    <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="text-brand-700 font-medium">
                      {school.phone}
                    </a>{" "}
                    or see full contact details on the{" "}
                    <a href="/contact" className="text-brand-700 font-medium">Contact page</a>.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
