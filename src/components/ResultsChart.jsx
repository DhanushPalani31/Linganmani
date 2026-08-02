import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { TrendingUp, Award } from "lucide-react";
import { academicResults } from "../data/content";

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-lg px-4 py-3 text-sm">
      <p className="font-semibold text-ink-900 mb-1">{label} batch</p>
      <p className="text-brand-700">Pass rate: <span className="font-semibold">{payload[0].value}%</span></p>
    </div>
  );
}

export default function ResultsChart() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const latest = academicResults[academicResults.length - 1];
  const first = academicResults[0];
  const improvement = latest.passPercent - first.passPercent;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-700">
            Academic Track Record
          </span>
          <h3 className="mt-2 font-display font-bold text-xl text-ink-900">
            Board exam pass rate, {first.year}–{latest.year}
          </h3>
        </div>
        <div className="flex gap-6">
          <div className="text-right">
            <p className="font-display font-bold text-2xl text-brand-700">{latest.passPercent}%</p>
            <p className="text-xs text-ink-500 flex items-center gap-1 justify-end">
              <TrendingUp size={12} className="text-success-500" /> +{improvement}% since {first.year}
            </p>
          </div>
          <div className="text-right">
            <p className="font-display font-bold text-2xl text-brand-700">{latest.distinctions}</p>
            <p className="text-xs text-ink-500 flex items-center gap-1 justify-end">
              <Award size={12} className="text-accent-500" /> distinctions ({latest.year})
            </p>
          </div>
        </div>
      </div>

      <div className="h-56 -ml-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={academicResults}
            onMouseMove={(s) => setHoverIndex(s?.activeTooltipIndex ?? null)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <defs>
              <linearGradient id="passGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="year" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#64748b" }} />
            <YAxis
              domain={[80, 100]}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#64748b" }}
              tickFormatter={(v) => `${v}%`}
              width={40}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#2563eb", strokeWidth: 1, strokeDasharray: "4 4" }} />
            <Area
              type="monotone"
              dataKey="passPercent"
              stroke="#1d4ed8"
              strokeWidth={2.5}
              fill="url(#passGradient)"
              dot={(props) => {
                const active = hoverIndex === props.index;
                return (
                  <circle
                    key={props.index}
                    cx={props.cx}
                    cy={props.cy}
                    r={active ? 5.5 : 3.5}
                    fill="#1d4ed8"
                    stroke="#fff"
                    strokeWidth={2}
                  />
                );
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-xs text-ink-500">
        Sample data shown for illustration — replace with the school's verified board results in{" "}
        <code className="px-1 py-0.5 bg-slate-100 rounded">src/data/content.js</code> (
        <code className="px-1 py-0.5 bg-slate-100 rounded">academicResults</code>) before launch.
      </p>
    </div>
  );
}
