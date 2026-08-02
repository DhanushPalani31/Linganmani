import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { chatbotFaqs } from "../data/content";

// Human-readable question labels for the same FAQ data the chatbot uses,
// so the answers only ever need to be maintained in one place
// (src/data/content.js -> chatbotFaqs).
const QUESTIONS = [
  "How do I apply for admission?",
  "What are the fees, and are scholarships available?",
  "What are the school's timings?",
  "How do I contact the school?",
  "Does the school help students who are struggling?",
  "Who runs the school?",
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {chatbotFaqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-medium text-ink-900">{QUESTIONS[i]}</span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-brand-700 shrink-0"
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm text-ink-500 max-w-2xl">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
