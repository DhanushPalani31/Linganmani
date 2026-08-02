import { School, Trees, Laptop, Library, FlaskConical, Bus } from "lucide-react";
import { facilities } from "../data/content";

const ICONS = { School, Trees, Laptop, Library, FlaskConical, Bus };

export default function Facilities() {
  return (
    <div>
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">Facilities</span>
          <h1 className="mt-3 font-display font-extrabold text-3xl lg:text-4xl text-ink-900">
            A campus built for learning, play, and growth.
          </h1>
          <p className="mt-4 text-ink-700 max-w-2xl mx-auto">
            From spacious classrooms to a dedicated garden and playground, the campus at Thayappa Nagar
            is built around students spending their day comfortably and safely.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f) => {
            const Icon = ICONS[f.icon];
            return (
              <div key={f.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand-50 grid place-items-center text-brand-700 mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg text-ink-900">{f.title}</h3>
                <p className="mt-2 text-sm text-ink-500">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
