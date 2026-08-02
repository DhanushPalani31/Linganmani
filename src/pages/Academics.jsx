import { Suspense, lazy } from "react";
import { BookOpen, GraduationCap, MonitorPlay, Award, CheckCircle2, FlaskConical, Calculator, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { programs } from "../data/content";
import Reveal from "../components/Reveal";

const ResultsChart = lazy(() => import("../components/ResultsChart"));

const ICONS = { BookOpen, GraduationCap, MonitorPlay, Award };

const structure = [
  { level: "Primary (Std I-V)", desc: "Foundational literacy, numeracy, and habit-building in a nurturing setting." },
  { level: "Middle School (Std VI-VIII)", desc: "Subject specialisation begins, alongside science and computer lab sessions." },
  { level: "Matriculation (Std IX-X)", desc: "Focused, exam-oriented preparation aligned with the Matriculation Board syllabus." },
  { level: "Higher Secondary (Std XI-XII)", desc: "Stream-based study preparing students for board exams, entrance exams, and college admission." },
];

const streams = [
  { name: "Science", desc: "Physics, Chemistry, Biology / Computer Science with Mathematics.", icon: FlaskConical },
  { name: "Commerce", desc: "Accountancy, Commerce, and Economics with Business Mathematics.", icon: Calculator },
  { name: "Arts", desc: "History, Economics, and Political Science for students headed toward the humanities.", icon: Landmark },
];

export default function Academics() {
  return (
    <div>
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">Academics</span>
          <h1 className="mt-3 font-display font-extrabold text-3xl lg:text-4xl text-ink-900">
            A syllabus-first education, from LKG to Std XII.
          </h1>
          <p className="mt-4 text-ink-700 max-w-2xl mx-auto">
            Classroom teaching across Matriculation and Higher Secondary levels, backed by smart classrooms,
            science and computer labs, and coaching for students who need extra support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }} className="h-full rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-shadow">
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

      {/* Academic Track Record — a concrete, data-backed trust signal for parents */}
      <section className="mx-auto max-w-5xl px-5 lg:px-8 pb-16">
        <Reveal>
          <Suspense
            fallback={
              <div className="rounded-3xl border border-slate-200 bg-white p-8 h-72 animate-pulse" />
            }
          >
            <ResultsChart />
          </Suspense>
        </Reveal>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <h2 className="font-display font-bold text-2xl text-ink-900 mb-8 text-center">Academic Structure</h2>
          <div className="space-y-4">
            {structure.map((s, i) => (
              <Reveal key={s.level} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-slate-200 p-6 flex gap-5 items-start">
                  <span className="w-10 h-10 rounded-full bg-brand-700 text-white grid place-items-center font-display font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-900">{s.level}</h3>
                    <p className="mt-1 text-sm text-ink-500">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Higher Secondary streams */}
          <div className="mt-10">
            <Reveal>
              <h3 className="text-center font-display font-semibold text-lg text-ink-900 mb-6">
                Higher Secondary streams offered
              </h3>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-6">
              {streams.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.name} delay={i * 0.08}>
                    <motion.div whileHover={{ y: -4 }} className="bg-white rounded-2xl border border-slate-200 p-6 text-center h-full">
                      <div className="w-12 h-12 rounded-xl bg-brand-50 grid place-items-center text-brand-700 mx-auto mb-4">
                        <Icon size={22} />
                      </div>
                      <h4 className="font-display font-semibold text-ink-900">{s.name}</h4>
                      <p className="mt-2 text-sm text-ink-500">{s.desc}</p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16">
        <h2 className="font-display font-bold text-2xl text-ink-900 mb-6 text-center">Why families choose us</h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            "Certified, experienced teaching staff",
            "Free coaching for students who need extra support",
            "Smart classrooms alongside regular teaching",
            "Consistent, strong board results across Matriculation and Higher Secondary",
            "Scholarships for deserving students",
            "A safe, disciplined, values-based environment",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-ink-700">
              <CheckCircle2 className="text-success-500 shrink-0 mt-0.5" size={20} />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
