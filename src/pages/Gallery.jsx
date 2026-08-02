import { Image as ImageIcon } from "lucide-react";

const albums = [
  { title: "Annual Day", tone: "from-brand-600 to-brand-900" },
  { title: "Sports Meet", tone: "from-success-500 to-success-600" },
  { title: "Campus & Garden", tone: "from-accent-500 to-accent-600" },
  { title: "Classrooms", tone: "from-brand-500 to-brand-700" },
  { title: "Republic Day", tone: "from-ink-700 to-ink-900" },
  { title: "Science Lab", tone: "from-success-600 to-brand-900" },
  { title: "Independence Day", tone: "from-brand-700 to-ink-900" },
  { title: "Farewell Day", tone: "from-accent-400 to-accent-600" },
];

export default function Gallery() {
  return (
    <div>
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">Gallery</span>
          <h1 className="mt-3 font-display font-extrabold text-3xl lg:text-4xl text-ink-900">
            Campus life, in pictures.
          </h1>
          <p className="mt-4 text-ink-700 max-w-2xl mx-auto">
            These tiles are placeholders — drop the school's real event photos into
            <code className="mx-1 px-1.5 py-0.5 bg-white rounded text-sm">/src/assets/gallery</code>
            to replace them.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {albums.map((a) => (
            <div key={a.title} className={`aspect-square rounded-2xl bg-gradient-to-br ${a.tone} flex flex-col items-center justify-center text-white gap-2`}>
              <ImageIcon size={26} className="opacity-80" />
              <span className="text-sm font-semibold">{a.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
