import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, MonitorPlay, Award, ArrowRight, Quote } from "lucide-react";
import { school, stats, programs, testimonials, events } from "../data/content";
import ImageWithFallback from "../components/ImageWithFallback";

const ICONS = { BookOpen, GraduationCap, MonitorPlay, Award };

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-brand-700 bg-brand-100 rounded-full px-3 py-1">
              Tirupattur, Tamil Nadu · Est. {school.founded}
            </span>
            <h1 className="mt-5 font-display font-extrabold text-4xl lg:text-5xl leading-[1.08] text-ink-900">
              Building strong foundations for {school.students} students in Tirupattur.
            </h1>
            <p className="mt-5 text-lg text-ink-700 max-w-xl">
              {school.name} has provided disciplined, caring matriculation education since {school.founded} —
              known for supporting every learner, including those who need extra coaching to succeed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-700 hover:bg-brand-600 text-white font-semibold px-6 py-3 transition-colors">
                Enquire for Admission <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-slate-300 text-ink-900 font-semibold px-6 py-3 hover:bg-slate-50">
                Our Story
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-2xl text-brand-700">{s.value}</p>
                  <p className="text-xs text-ink-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <ImageWithFallback
            src="/images/hero-campus.jpg"
            alt="Lingannamani Matriculation School campus and students"
            className="w-full max-w-lg mx-auto rounded-3xl object-cover aspect-[4/3] shadow-xl"
          />
        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">What We Offer</span>
          <h2 className="mt-3 font-display font-bold text-3xl text-ink-900">
            Built around students who learn at different speeds.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <div key={p.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-50 grid place-items-center text-brand-700 mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-500">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* News strip */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">News &amp; Events</span>
              <h2 className="mt-3 font-display font-bold text-3xl text-ink-900">What's happening on campus</h2>
            </div>
            <Link to="/events" className="text-sm font-semibold text-brand-700 flex items-center gap-1">
              View all events <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 3).map((e) => (
              <div key={e.title} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="h-28 bg-gradient-to-br from-brand-600 to-brand-900 flex items-center justify-center text-white text-xs font-semibold tracking-wide uppercase">
                  {e.tag}
                </div>
                <div className="p-5">
                  <p className="text-xs text-ink-500 font-medium">{e.date}</p>
                  <h3 className="font-display font-semibold text-ink-900 mt-1">{e.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="test" className="mx-auto max-w-7xl px-5 lg:px-8 py-20 scroll-mt-24">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">Testimonials</span>
          <h2 className="mt-3 font-display font-bold text-3xl text-ink-900">What parents and students say</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-brand-50 p-7">
              <Quote className="text-brand-300" size={26} />
              <p className="mt-4 font-display text-lg text-ink-900 leading-snug">"{t.quote}"</p>
              <p className="mt-4 text-sm font-semibold text-ink-700">{t.name} <span className="font-normal text-ink-500">· {t.role}</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-brand-700 to-brand-900 px-8 py-12 lg:px-14 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="font-display font-bold text-2xl lg:text-3xl">Admissions for 2026-27 are open now.</h3>
            <p className="mt-2 text-brand-100 max-w-lg">Call the office or visit the campus at Thayappa Nagar, Tirupattur - 635601.</p>
          </div>
          <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="shrink-0 rounded-full bg-white text-brand-900 font-semibold px-7 py-3.5 hover:bg-slate-100">
            Call {school.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
