"use client";

import { useMemo, useState } from "react";
import { calculatePercentage, formatNumber, type PercentageMode } from "@/lib/browser-tool-calculations";

const field = "w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100";
const MODES: { id: PercentageMode; name: string; first: string; second: string }[] = [
  { id: "of", name: "What is X% of Y?", first: "Percentage (X)", second: "Base amount (Y)" },
  { id: "is", name: "X is what % of Y?", first: "Part (X)", second: "Whole (Y, cannot be 0)" },
  { id: "adjust", name: "Increase or decrease Y by X%", first: "Percentage (X)", second: "Starting amount (Y)" },
  { id: "change", name: "Percentage change", first: "Original value (must be above 0)", second: "New value" },
];

export default function PercentageCalculator() {
  const [mode, setMode] = useState<PercentageMode>("of");
  const [direction, setDirection] = useState<"increase" | "decrease">("increase");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const current = MODES.find((item) => item.id === mode)!;

  const outcome = useMemo(() => {
    if (!first.trim() || !second.trim()) return { message: "Fill in both values to see the result." };
    const a = Number(first.trim());
    const b = Number(second.trim());
    if (!Number.isFinite(a) || !Number.isFinite(b)) return { error: "Enter valid numbers in both fields." };
    try {
      const value = calculatePercentage(mode, a, b, direction);
      const text = formatNumber(value, 6);
      return { result: mode === "is" || mode === "change" ? `${text}%` : text };
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Couldn't calculate this." };
    }
  }, [mode, first, second, direction]);

  return (
    <div className="rounded-3xl border border-violet-100 bg-white/95 p-5 shadow-sm sm:p-6">
      <label htmlFor="pct-mode" className="mb-2 block text-sm font-medium text-slate-700">Calculation</label>
      <select id="pct-mode" value={mode} onChange={(event) => setMode(event.target.value as PercentageMode)} className={field}>
        {MODES.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
      </select>
      {mode === "adjust" && (
        <>
          <label htmlFor="pct-direction" className="mb-2 mt-4 block text-sm font-medium text-slate-700">Direction</label>
          <select id="pct-direction" value={direction} onChange={(event) => setDirection(event.target.value as "increase" | "decrease")} className={field}>
            <option value="increase">Increase</option>
            <option value="decrease">Decrease</option>
          </select>
        </>
      )}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="pct-first" className="mb-2 block text-sm font-medium text-slate-700">{current.first}</label>
          <input id="pct-first" type="text" inputMode="decimal" value={first} onChange={(event) => setFirst(event.target.value)} className={field} />
        </div>
        <div>
          <label htmlFor="pct-second" className="mb-2 block text-sm font-medium text-slate-700">{current.second}</label>
          <input id="pct-second" type="text" inputMode="decimal" value={second} onChange={(event) => setSecond(event.target.value)} className={field} />
        </div>
      </div>
      <div aria-live="polite" className="mt-5">
        {outcome.error && <p role="alert" className="rounded-xl bg-rose-50 p-4 text-sm leading-6 text-rose-700">{outcome.error}</p>}
        {outcome.message && <p className="text-sm text-slate-500">{outcome.message}</p>}
        {outcome.result && (
          <div className="rounded-2xl border border-violet-200 bg-violet-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Result</p>
            <p className="mt-2 break-all text-3xl font-bold text-slate-900">{outcome.result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
