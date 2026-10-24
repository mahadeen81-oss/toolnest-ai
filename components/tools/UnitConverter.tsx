"use client";

import { useMemo, useState } from "react";
import { UNIT_GROUPS, convertUnit, formatNumber, type ConversionCategory } from "@/lib/browser-tool-calculations";

const CATEGORIES = Object.keys(UNIT_GROUPS) as ConversionCategory[];
const field = "w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

export default function UnitConverter() {
  const [category, setCategory] = useState<ConversionCategory>("length");
  const [from, setFrom] = useState("m");
  const [to, setTo] = useState("km");
  const [value, setValue] = useState("");
  const units = UNIT_GROUPS[category].units;

  function changeCategory(next: ConversionCategory) {
    const list = UNIT_GROUPS[next].units;
    setCategory(next);
    setFrom(list[0].id);
    setTo(list[1].id);
  }

  const outcome = useMemo(() => {
    const trimmed = value.trim();
    if (!trimmed) return { message: "Enter a value to convert." };
    const number = Number(trimmed);
    if (!Number.isFinite(number)) return { error: "Enter a valid number, such as 12.5 or -4." };
    try {
      return { result: formatNumber(convertUnit(number, category, from, to)) };
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Couldn't convert this value." };
    }
  }, [value, category, from, to]);

  const label = (id: string) => units.find((unit) => unit.id === id)?.label ?? "";

  return (
    <div className="rounded-3xl border border-violet-100 bg-white/95 p-5 shadow-sm sm:p-6">
      <label htmlFor="unit-category" className="mb-2 block text-sm font-medium text-slate-700">Category</label>
      <select id="unit-category" value={category} onChange={(event) => changeCategory(event.target.value as ConversionCategory)} className={field}>
        {CATEGORIES.map((key) => <option key={key} value={key}>{UNIT_GROUPS[key].label}</option>)}
      </select>
      <label htmlFor="unit-value" className="mb-2 mt-4 block text-sm font-medium text-slate-700">Value</label>
      <input id="unit-value" type="text" inputMode="decimal" value={value} onChange={(event) => setValue(event.target.value)} placeholder="e.g. 10" className={field} />
      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
        <div>
          <label htmlFor="unit-from" className="mb-2 block text-sm font-medium text-slate-700">From</label>
          <select id="unit-from" value={from} onChange={(event) => setFrom(event.target.value)} className={field}>{units.map((unit) => <option key={unit.id} value={unit.id}>{unit.label}</option>)}</select>
        </div>
        <button type="button" onClick={() => { setFrom(to); setTo(from); }} className="rounded-xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-semibold text-violet-800 hover:bg-violet-100">Swap units</button>
        <div>
          <label htmlFor="unit-to" className="mb-2 block text-sm font-medium text-slate-700">To</label>
          <select id="unit-to" value={to} onChange={(event) => setTo(event.target.value)} className={field}>{units.map((unit) => <option key={unit.id} value={unit.id}>{unit.label}</option>)}</select>
        </div>
      </div>
      <div aria-live="polite" className="mt-5">
        {outcome.error && <p role="alert" className="rounded-xl bg-rose-50 p-4 text-sm leading-6 text-rose-700">{outcome.error}</p>}
        {outcome.message && <p className="text-sm text-slate-500">{outcome.message}</p>}
        {outcome.result && (
          <div className="rounded-2xl border border-violet-200 bg-violet-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Result</p>
            <p className="mt-2 break-all text-2xl font-bold text-slate-900">{outcome.result} <span className="text-base font-medium text-slate-600">{label(to)}</span></p>
            <p className="mt-1 text-xs text-slate-500">{value.trim()} {label(from).toLowerCase()} converted. Large or tiny results appear in scientific notation.</p>
          </div>
        )}
      </div>
    </div>
  );
}
