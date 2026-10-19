"use client";

import { useState } from "react";

const CHARSETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()-_=+[]{}:,.?",
} as const;
type CharacterClass = keyof typeof CHARSETS;

function randomIndex(max: number): number {
  const cryptoApi = window.crypto;
  if (!cryptoApi?.getRandomValues) throw new Error("Secure random generation isn't available in this browser. Try a current browser with Web Crypto support.");
  const range = 256;
  const limit = Math.floor(range / max) * max;
  const sample = new Uint8Array(1);
  do {
    cryptoApi.getRandomValues(sample);
  } while (sample[0] >= limit);
  return sample[0] % max;
}

function createPassword(length: number, enabled: CharacterClass[], avoidLookalikes: boolean): string {
  const lookalikes = new Set(["I", "l", "1", "O", "o", "0"]);
  const sets = enabled.map((key) => {
    const chars = CHARSETS[key];
    const filtered = avoidLookalikes ? [...chars].filter((char) => !lookalikes.has(char)).join("") : chars;
    if (!filtered) throw new Error("One selected character group is empty. Change the options and try again.");
    return filtered;
  });
  if (length < sets.length) throw new Error("Choose a longer password to include every selected character type.");
  const pool = sets.join("");
  const chars = sets.map((set) => set[randomIndex(set.length)]);
  while (chars.length < length) chars.push(pool[randomIndex(pool.length)]);
  for (let i = chars.length - 1; i > 0; i -= 1) {
    const j = randomIndex(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join("");
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(20);
  const [enabled, setEnabled] = useState<CharacterClass[]>(["uppercase", "lowercase", "numbers", "symbols"]);
  const [avoidLookalikes, setAvoidLookalikes] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const options: { id: CharacterClass; label: string; hint: string }[] = [
    { id: "uppercase", label: "Uppercase letters", hint: "A–Z" },
    { id: "lowercase", label: "Lowercase letters", hint: "a–z" },
    { id: "numbers", label: "Numbers", hint: "0–9" },
    { id: "symbols", label: "Symbols", hint: "! @ # …" },
  ];
  const classCount = enabled.length;
  const strength = !password ? "" : length >= 24 && classCount >= 3 ? "Very strong" : length >= 16 && classCount >= 3 ? "Strong" : length >= 12 && classCount >= 2 ? "Good" : "Could be stronger";
  const strengthColor = strength === "Very strong" || strength === "Strong" ? "text-emerald-700" : strength === "Good" ? "text-amber-700" : "text-rose-700";

  function toggleClass(key: CharacterClass) {
    setEnabled((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
    setPassword("");
    setError("");
    setStatus("");
  }

  function generate() {
    setError("");
    setStatus("");
    if (!enabled.length) {
      setPassword("");
      setError("Select at least one character type to generate a password.");
      return;
    }
    try {
      setPassword(createPassword(length, enabled, avoidLookalikes));
      setStatus("A new password was generated securely on this device.");
    } catch (generationError) {
      setPassword("");
      setError(generationError instanceof Error ? generationError.message : "Couldn't securely generate a password. Please try again.");
    }
  }

  async function copy() {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      setStatus("Password copied to your clipboard.");
    } catch {
      setStatus("Couldn't copy automatically. Select the password and use your device's Copy command.");
    }
  }

  return (
    <div className="rounded-3xl border border-violet-100 bg-white/95 p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <label htmlFor="password-length" className="text-sm font-semibold text-slate-800">Password length</label>
        <span className="rounded-lg bg-violet-50 px-3 py-1.5 font-mono text-sm font-semibold text-violet-800">{length} characters</span>
      </div>
      <input id="password-length" type="range" min={8} max={64} value={length} onChange={(event) => { setLength(Number(event.target.value)); setPassword(""); setStatus(""); }} className="mt-4 w-full accent-violet-600" />
      <div className="mt-1 flex justify-between text-xs text-slate-500"><span>8</span><span>64</span></div>
      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-slate-800">Include character types</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {options.map((option) => <label key={option.id} className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-slate-200 p-3.5 text-sm text-slate-700"><span><span className="block font-medium">{option.label}</span><span className="mt-1 block text-xs text-slate-500">{option.hint}</span></span><input type="checkbox" checked={enabled.includes(option.id)} onChange={() => toggleClass(option.id)} className="h-4 w-4 accent-violet-600" /></label>)}
        </div>
      </fieldset>
      <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-3.5 text-sm text-slate-700"><input type="checkbox" checked={avoidLookalikes} onChange={(event) => { setAvoidLookalikes(event.target.checked); setPassword(""); setStatus(""); }} className="mt-0.5 accent-violet-600" /><span><span className="font-medium">Avoid look-alike characters</span><span className="mt-1 block text-xs leading-5 text-slate-500">Skip characters such as O, 0, I, l, and 1 to make passwords easier to read.</span></span></label>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={generate} className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600">Generate password</button>
        <button type="button" disabled={!password} onClick={copy} className="rounded-xl border border-violet-200 bg-violet-50 px-5 py-3 text-sm font-semibold text-violet-800 hover:bg-violet-100 disabled:cursor-not-allowed disabled:opacity-50">Copy password</button>
      </div>
      {error && <p role="alert" className="mt-4 rounded-xl bg-rose-50 p-4 text-sm leading-6 text-rose-700">{error}</p>}
      {password && <div className="mt-5 rounded-2xl border border-violet-200 bg-violet-50/70 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Generated on this device</p>
        <output aria-label="Generated password" className="mt-3 block break-all rounded-xl bg-white px-4 py-4 font-mono text-lg leading-7 text-slate-900">{password}</output>
        <p className={`mt-3 text-sm font-semibold ${strengthColor}`}>Estimated strength: {strength} <span className="font-normal text-slate-600">· based on length and character variety</span></p>
      </div>}
      <p role="status" aria-live="polite" className="mt-3 text-sm text-slate-500">{status}</p>
      <p className="mt-3 text-xs leading-5 text-slate-500">This password stays in component memory only. It is never sent or saved; it is copied only when you choose Copy.</p>
    </div>
  );
}
