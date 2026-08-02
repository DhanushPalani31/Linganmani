import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, MonitorPlay, Award, ArrowRight } from "lucide-react";
import { school, stats, programs, events } from "../data/content";
import ImageWithFallback from "../components/ImageWithFallback";
import Reveal from "../components/Reveal";
import CountUpStat from "../components/CountUpStat";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { useAdmissionModal } from "../context/AdmissionModalContext";

const ICONS = { BookOpen, GraduationCap, MonitorPlay, Award };

export default function Home() {
  const { openModal } = useAdmissionModal();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-brand-700 bg-brand-100 rounded-full px-3 py-1">
              Tirupattur, Tamil Nadu · Est. {school.founded}
            </span>
            <h1 className="mt-5 font-display font-extrabold text-4xl lg:text-5xl leading-[1.08] text-ink-900">
              Building strong foundations for {school.students} students in Tirupattur.
            </h1>
            <p className="mt-5 text-lg text-ink-700 max-w-xl">
              {school.name} has provided disciplined, caring education since {school.founded} —
              known for supporting every learner, including those who need extra coaching to succeed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.button
                onClick={openModal}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-brand-700 hover:bg-brand-600 text-white font-semibold px-6 py-3 transition-colors"
              >
                Enquire for Admission <ArrowRight size={16} />
              </motion.button>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-slate-300 text-ink-900 font-semibold px-6 py-3 hover:bg-slate-50">
                Our Story
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <CountUpStat value={s.value} className="font-display font-bold text-2xl text-brand-700" />
                  <p className="text-xs text-ink-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <ImageWithFallback
              src="/images/hero-campus.png"
              alt="Lingannamani Matriculation & Higher Secondary School campus and students"
              className="w-full max-w-lg mx-auto rounded-3xl object-cover aspect-[4/3] shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">What We Offer</span>
          <h2 className="mt-3 font-display font-bold text-3xl text-ink-900">
            Built around students who learn at different speeds.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="h-full rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 grid place-items-center text-brand-700 mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink-500">{p.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* News strip */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">News &amp; Events</span>
              <h2 className="mt-3 font-display font-bold text-3xl text-ink-900">What's happening on campus</h2>
            </div>
            <Link to="/events" className="text-sm font-semibold text-brand-700 flex items-center gap-1">
              View all events <ArrowRight size={15} />
            </Link>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 3).map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden h-full"
                >
                  <div className="h-28 bg-gradient-to-br from-brand-600 to-brand-900 flex items-center justify-center text-white text-xs font-semibold tracking-wide uppercase">
                    {e.tag}
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-ink-500 font-medium">{e.date}</p>
                    <h3 className="font-display font-semibold text-ink-900 mt-1">{e.title}</h3>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="test" className="mx-auto max-w-7xl px-5 lg:px-8 py-20 scroll-mt-24">
        <Reveal className="max-w-2xl mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">Testimonials</span>
          <h2 className="mt-3 font-display font-bold text-3xl text-ink-900">What parents and students say</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <TestimonialCarousel />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-20">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-r from-brand-700 to-brand-900 px-8 py-12 lg:px-14 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-6 text-white">
            <div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl">Admissions for 2026-27 are open now.</h3>
              <p className="mt-2 text-brand-100 max-w-lg">Call the office, or send a quick enquiry and the office will call you back.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.button
                onClick={openModal}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="shrink-0 rounded-full bg-white text-brand-900 font-semibold px-7 py-3.5 hover:bg-slate-100"
              >
                Enquire for Admission
              </motion.button>
              <a
                href={`tel:${school.phone.replace(/\s/g, "")}`}
                className="shrink-0 rounded-full border border-white/40 text-white font-semibold px-7 py-3.5 hover:bg-white/10"
              >
                Call {school.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
