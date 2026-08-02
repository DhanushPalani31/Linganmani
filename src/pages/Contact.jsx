import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { school } from "../data/content";
import ImageWithFallback from "../components/ImageWithFallback";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16 grid lg:grid-cols-2 gap-12">
        <div>
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
            src="/images/contact-office.jpg"
            alt="Lingannamani Matriculation School front office"
            className="w-full max-w-sm mx-auto mt-10 rounded-2xl object-cover aspect-square shadow-lg"
          />
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-8">
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 className="mx-auto text-success-500" size={40} />
              <h3 className="mt-4 font-display font-semibold text-lg text-ink-900">Message received</h3>
              <p className="mt-2 text-sm text-ink-500">
                The office will get back to you shortly. For anything urgent, please call {school.phone}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-display font-semibold text-xl text-ink-900">Send an admission enquiry</h2>
              <div>
                <label className="text-sm font-medium text-ink-700">Full name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-200"
                  placeholder="Parent / Guardian name"
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
                <label className="text-sm font-medium text-ink-700">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-200"
                  placeholder="Which class are you enquiring about?"
                />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-full bg-brand-700 hover:bg-brand-600 text-white font-semibold py-3">
                Send Enquiry <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
