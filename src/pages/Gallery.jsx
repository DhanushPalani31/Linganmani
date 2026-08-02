import ImageWithFallback from "../components/ImageWithFallback";

const albums = [
  { title: "Annual Day", file: "annual-day", tone: "from-brand-600 to-brand-900" },
  { title: "Sports Meet", file: "sports-meet", tone: "from-success-500 to-success-600" },
  { title: "Campus & Garden", file: "campus-garden", tone: "from-accent-500 to-accent-600" },
  { title: "Classrooms", file: "classrooms", tone: "from-brand-500 to-brand-700" },
  { title: "Republic Day", file: "republic-day", tone: "from-ink-700 to-ink-900" },
  { title: "Science Lab", file: "science-lab", tone: "from-success-600 to-brand-900" },
  { title: "Independence Day", file: "independence-day", tone: "from-brand-700 to-ink-900" },
  { title: "Farewell Day", file: "farewell-day", tone: "from-accent-400 to-accent-600" },
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
            Drop real photos into <code className="mx-1 px-1.5 py-0.5 bg-white rounded text-sm">public/images/gallery/</code>
            using the filenames below — each tile picks up its photo automatically. Until then, a
            placeholder tone shows through.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {albums.map((a) => (
            <div key={a.title} className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${a.tone}`}>
              <ImageWithFallback
                src={`/images/gallery/${a.file}.png`}
                alt={a.title}
                className="absolute inset-0 w-full h-full object-cover"
                fallbackClassName="absolute inset-0 !bg-transparent"
              />
              <span className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm font-semibold px-3 py-2">
                {a.title}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
