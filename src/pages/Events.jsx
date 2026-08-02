import { CalendarDays } from "lucide-react";
import { events } from "../data/content";

export default function Events() {
  return (
    <div>
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">News &amp; Events</span>
          <h1 className="mt-3 font-display font-extrabold text-3xl lg:text-4xl text-ink-900">
            Straight off the school notice board.
          </h1>
          <p className="mt-4 text-ink-700 max-w-2xl mx-auto">
            Sports days, annual day, national celebrations, and admissions notices — all in one
            easy-to-browse feed instead of a separate static page per post.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.title} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-brand-600 to-brand-900 flex items-center justify-center text-white text-xs font-semibold tracking-wide uppercase">
                {e.tag}
              </div>
              <div className="p-5">
                <p className="flex items-center gap-1.5 text-xs text-ink-500 font-medium">
                  <CalendarDays size={13} /> {e.date}
                </p>
                <h3 className="font-display font-semibold text-ink-900 mt-2">{e.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
