import { Target, Compass, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { school, trustees, stats } from "../data/content";
import ImageWithFallback from "../components/ImageWithFallback";
import Reveal from "../components/Reveal";
import CountUpStat from "../components/CountUpStat";

export default function About() {
  return (
    <div>
      <section className="bg-brand-50">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-16 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">About Us</span>
          <h1 className="mt-3 font-display font-extrabold text-3xl lg:text-4xl text-ink-900">
            From a rented hall to a campus with a garden and playground.
          </h1>
          <ImageWithFallback
            src="/images/about-campus.png"
            alt="Lingannamani Matriculation & Higher Secondary School campus building"
            className="w-full max-w-2xl mx-auto mt-8 rounded-2xl object-cover aspect-video shadow-lg"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16">
        <p className="text-ink-700 leading-relaxed">
          {school.name} opened in {school.founded} with a handful of students in a rented building on
          T.N.H.B. land. As the school earned the community's trust, it outgrew that space — the trustees
          built a permanent campus at Thayappa Nagar in 2001, complete with a garden and playground, and
          expanded it again the following year to keep pace with demand.
        </p>
        <p className="mt-5 text-ink-700 leading-relaxed">
          Nearly three decades on, the school teaches over {school.students} students across Matriculation
          and Higher Secondary levels, with particular pride in how it supports students who find schoolwork
          difficult — through dedicated coaching sessions rather than letting anyone fall behind.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="rounded-2xl border border-slate-200 p-5 text-center">
                <CountUpStat value={s.value} className="font-display font-bold text-2xl text-brand-700" />
                <p className="text-xs text-ink-500 mt-1">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vm" className="bg-slate-50 py-16 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 grid sm:grid-cols-2 gap-6">
          <Reveal className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-brand-50 grid place-items-center text-brand-700 mb-4">
              <Compass size={22} />
            </div>
            <h2 className="font-display font-bold text-xl text-ink-900">Vision</h2>
            <p className="mt-3 text-ink-700">
              A community where every child feels loved, respected, and encouraged to grow into their
              fullest potential.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-brand-50 grid place-items-center text-brand-700 mb-4">
              <Target size={22} />
            </div>
            <h2 className="font-display font-bold text-xl text-ink-900">Mission</h2>
            <p className="mt-3 text-ink-700">
              To provide high-quality education and childcare in a safe, respectful, inclusive environment
              that builds a foundation for lifelong learning.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Motto */}
      <section id="motto" className="py-16 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-brand-700 text-white grid place-items-center mx-auto mb-5">
            <Sparkles size={24} />
          </div>
          <h2 className="font-display font-bold text-2xl text-ink-900">Our Motto</h2>
          <p className="mt-4 font-display text-xl text-ink-700 italic">
            "Knowledge, Discipline and Service"
          </p>
          <p className="mt-4 text-ink-500 max-w-xl mx-auto">
            Educating students to their highest academic potential, while shaping them into productive,
            responsible, ethical, and compassionate members of society.
          </p>
        </div>
      </section>

      {/* Trustees */}
      <section id="trustees" className="bg-slate-50 py-16 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">Board of Trustees</span>
            <h2 className="mt-3 font-display font-bold text-2xl text-ink-900">The people the school answers to</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustees.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-slate-200 p-6 text-center"
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 grid place-items-center font-display font-bold text-white text-lg bg-gradient-to-br from-brand-500 to-brand-800">
                    {t.name.split(" ").filter(Boolean).slice(-2).map((n) => n[0]).join("")}
                  </div>
                  <h3 className="font-semibold text-ink-900 text-sm">{t.name}</h3>
                  <p className="text-xs text-ink-500 mt-1 uppercase tracking-wide">{t.role}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
