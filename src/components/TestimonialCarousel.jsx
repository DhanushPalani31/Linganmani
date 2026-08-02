import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/content";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  const t = testimonials[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative rounded-3xl bg-brand-50 px-7 py-10 sm:px-12 sm:py-14 overflow-hidden"
    >
      <Quote className="text-brand-300" size={32} />
      <div className="relative min-h-[120px] mt-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-xl sm:text-2xl text-ink-900 leading-snug max-w-2xl">
              "{t.quote}"
            </p>
            <p className="mt-5 text-sm font-semibold text-ink-700">
              {t.name} <span className="font-normal text-ink-500">· {t.role}</span>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-9 h-9 rounded-full bg-white border border-brand-200 grid place-items-center text-brand-700 hover:bg-brand-100 transition-colors"
        >
          <ChevronLeft size={17} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-brand-700" : "w-2 bg-brand-200 hover:bg-brand-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-9 h-9 rounded-full bg-white border border-brand-200 grid place-items-center text-brand-700 hover:bg-brand-100 transition-colors"
        >
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  );
}
