// Serverless function (Vercel-style: /api/chat -> POST https://<site>/api/chat).
// Keeps GEMINI_API_KEY on the server only — never expose it in the browser.
//
// Local dev:  `vercel dev`  (reads GEMINI_API_KEY from a local .env file)
// Production: set GEMINI_API_KEY in your host's environment variables
//             (Vercel: Project Settings -> Environment Variables).
//
// Model: gemini-3.5-flash-lite is Google's current low-latency, low-cost
// GA model (good fit for a short FAQ-style assistant). Check
// https://ai.google.dev/gemini-api/docs/models for the current
// recommended model id before you deploy, since Google renames/retires
// models over time (gemini-2.5-flash and gemini-2.5-pro are both
// scheduled to be retired in October 2026).
const MODEL = "gemini-3.5-flash-lite";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const SYSTEM_INSTRUCTION = `You are the admissions and information assistant for
Lingannamani Matriculation School, Thayappa Nagar, Tirupattur - 635601, Tamil Nadu.
Founded 1997, 900+ students, Matriculation syllabus. Known for free coaching classes
for students who need extra support, smart classrooms, scholarships, a garden and
playground campus. Trustees: Mr. L. Mani (Chairman), Mrs. M. Saranya (President),
Mr. M. Dineshkanna (Secretary), Mrs. M. Megala (Treasurer). Phone: 04179 227162.
Email: lingannamani@yahoo.in. Admissions for 2026-27 are open.

Answer parent and student questions warmly and briefly (2-4 sentences). If you don't
know a specific fact (exact fees, exact timings, exam dates), say so honestly and tell
the person to call the school office at 04179 227162 rather than guessing. Do not
invent facts about the school.`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
  }

  const { messages } = req.body ?? {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Request body must include a non-empty messages array." });
  }

  // Basic guardrails: cap history length and message size sent upstream.
  const trimmed = messages.slice(-10).map((m) => ({
    role: m.role === "user" ? "user" : "model",
    parts: [{ text: String(m.text ?? "").slice(0, 1000) }],
  }));

  try {
    const upstream = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
        contents: trimmed,
        generationConfig: { temperature: 0.4, maxOutputTokens: 300 },
      }),
    });

    if (!upstream.ok) {
      const detail = await upstream.text();
      console.error("Gemini API error:", upstream.status, detail);
      return res.status(502).json({ error: "The assistant is temporarily unavailable." });
    }

    const data = await upstream.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") ??
      "Sorry, I couldn't put together an answer for that — please call the office at 04179 227162.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Chat handler error:", err);
    return res.status(500).json({ error: "Something went wrong reaching the assistant." });
  }
}
