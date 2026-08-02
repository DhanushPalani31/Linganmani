import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { school } from "../data/content";
import ImageWithFallback from "../components/ImageWithFallback";
import Reveal from "../components/Reveal";
import Faq from "../components/Faq";

const SUBJECTS = ["Admission enquiry", "Fees & scholarships", "Transport", "General question", "Feedback"];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", subject: SUBJECTS[0], message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    // No backend is wired up yet — replace this with a real form endpoint
    // (e.g. Formspree, EmailJS, or your own API route) before launch.
    setSent(true);
  }

  return (
    <div>
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">Contact Us</span>
          <h1 className="mt-3 font-display font-extrabold text-3xl lg:text-4xl text-ink-900">
            We'd love to hear from you.
          </h1>
          <p className="mt-3 text-ink-700 max-w-xl mx-auto">
            Reach the office directly below, or send a message for anything that isn't a quick
            admission enquiry — for a fast callback about admissions, use the
            "Enquire for Admission" button in the menu instead.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl bg-brand-50 grid place-items-center text-brand-700 shrink-0"><Phone size={20} /></span>
              <div>
                <p className="text-sm text-ink-500">Phone</p>
                <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="font-semibold text-ink-900">{school.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl bg-brand-50 grid place-items-center text-brand-700 shrink-0"><Mail size={20} /></span>
              <div>
                <p className="text-sm text-ink-500">Email</p>
                <a href={`mailto:${school.email}`} className="font-semibold text-ink-900">{school.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-xl bg-brand-50 grid place-items-center text-brand-700 shrink-0"><MapPin size={20} /></span>
              <div>
                <p className="text-sm text-ink-500">Address</p>
                <p className="font-semibold text-ink-900">{school.address}</p>
                <a href={school.mapsUrl} target="_blank" rel="noreferrer" className="text-sm text-brand-700 font-medium">
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
          <ImageWithFallback
            src="/images/contact-office.png"
            alt="Lingannamani Matriculation School front office"
            className="w-full max-w-sm mx-auto mt-10 rounded-2xl object-cover aspect-square shadow-lg"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white rounded-3xl border border-slate-200 p-8 h-full">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <CheckCircle2 className="mx-auto text-success-500" size={40} />
                <h3 className="mt-4 font-display font-semibold text-lg text-ink-900">Message received</h3>
                <p className="mt-2 text-sm text-ink-500">
                  The office will get back to you shortly. For anything urgent, please call {school.phone}.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-display font-semibold text-xl text-ink-900">Send us a message</h2>
                <div>
                  <label className="text-sm font-medium text-ink-700">Full name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700">Phone number</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-200"
                    placeholder="10-digit mobile number"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700">What's this about?</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-brand-200"
                  >
                    {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-ink-700">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-200"
                    placeholder="How can the school help?"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-brand-700 hover:bg-brand-600 text-white font-semibold py-3"
                >
                  Send Message <Send size={16} />
                </motion.button>
              </form>
            )}
          </div>
        </Reveal>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">FAQ</span>
            <h2 className="mt-3 font-display font-bold text-2xl text-ink-900">Common questions</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Faq />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
