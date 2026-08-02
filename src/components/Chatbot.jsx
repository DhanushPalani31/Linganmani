import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, GraduationCap, Loader2 } from "lucide-react";
import { chatbotFaqs, school } from "../data/content";

const WELCOME = {
  role: "bot",
  text: `Hi! I'm the ${school.shortName} assistant, powered by Gemini. Ask me about admissions, fees, coaching, or how to reach the office.`,
};

const QUICK_REPLIES = ["Admissions", "Fees & scholarships", "Contact details", "Coaching classes"];

// Offline fallback only — used if /api/chat is unreachable (e.g. no backend
// deployed yet, or GEMINI_API_KEY missing) so the widget never goes silent.
function offlineAnswer(userText) {
  const text = userText.toLowerCase();
  const hit = chatbotFaqs.find((faq) => faq.keywords.some((k) => text.includes(k)));
  if (hit) return hit.answer;
  return `I couldn't reach the assistant just now — please call the school office at ${school.phone} or email ${school.email}.`;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, loading]);

  async function send(text) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextHistory = [...messages, { role: "user", text: trimmed }];
    setMessages(nextHistory);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextHistory }),
      });

      if (!res.ok) throw new Error("Non-200 from /api/chat");
      const data = await res.json();
      setMessages((m) => [...m, { role: "bot", text: data.reply }]);
    } catch (err) {
      // No backend deployed yet, or the Gemini call failed — degrade
      // gracefully instead of leaving the user without a reply.
      setMessages((m) => [...m, { role: "bot", text: offlineAnswer(trimmed) }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat assistant"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-brand-700 hover:bg-brand-600 text-white shadow-xl grid place-items-center transition-transform hover:scale-105"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[92vw] max-w-sm h-[65vh] max-h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
          <div className="bg-brand-700 text-white px-4 py-3 flex items-center gap-3">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-white/15">
              <GraduationCap size={16} />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">{school.shortName} Assistant</p>
              <p className="text-[11px] text-brand-100">Powered by Gemini</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-snug ${
                    m.role === "user"
                      ? "bg-brand-700 text-white rounded-br-sm"
                      : "bg-white border border-slate-200 text-ink-900 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-3.5 py-2 flex items-center gap-2 text-ink-500 text-sm">
                  <Loader2 size={14} className="animate-spin" /> Thinking…
                </div>
              </div>
            )}

            {messages.length === 1 && !loading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-brand-200 text-brand-700 bg-brand-50 hover:bg-brand-100"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-slate-200 p-3 bg-white"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              disabled={loading}
              className="flex-1 text-sm px-3.5 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading}
              aria-label="Send"
              className="w-10 h-10 shrink-0 grid place-items-center rounded-full bg-brand-700 hover:bg-brand-600 text-white disabled:opacity-60"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
