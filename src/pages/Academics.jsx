import { BookOpen, GraduationCap, MonitorPlay, Award, CheckCircle2 } from "lucide-react";
import { programs } from "../data/content";

const ICONS = { BookOpen, GraduationCap, MonitorPlay, Award };

const structure = [
  { level: "Primary (Std I-V)", desc: "Foundational literacy, numeracy, and habit-building in a nurturing setting." },
  { level: "Middle School (Std VI-VIII)", desc: "Subject specialisation begins, alongside science and computer lab sessions." },
  { level: "Matriculation (Std IX-X)", desc: "Focused, exam-oriented preparation aligned with the Matriculation Board syllabus." },
];

export default function Academics() {
  return (
    <div>
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">Academics</span>
          <h1 className="mt-3 font-display font-extrabold text-3xl lg:text-4xl text-ink-900">
            A syllabus-first education, with room for every learner.
          </h1>
          <p className="mt-4 text-ink-700 max-w-2xl mx-auto">
            Classroom teaching under the Matriculation syllabus, backed by smart classrooms, science and
            computer labs, and coaching for students who need extra support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <div key={p.title} className="rounded-2xl border border-slate-200 p-6">
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

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <h2 className="font-display font-bold text-2xl text-ink-900 mb-8 text-center">Academic Structure</h2>
          <div className="space-y-4">
            {structure.map((s, i) => (
              <div key={s.level} className="bg-white rounded-2xl border border-slate-200 p-6 flex gap-5 items-start">
                <span className="w-10 h-10 rounded-full bg-brand-700 text-white grid place-items-center font-display font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-ink-900">{s.level}</h3>
                  <p className="mt-1 text-sm text-ink-500">{s.desc}</p>
                </div>
              </div>
            ))}
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
            "Consistent, strong Matriculation board results",
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
