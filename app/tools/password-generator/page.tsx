import type { Metadata } from "next";
import PasswordGenerator from "@/components/tools/PasswordGenerator";

export const metadata: Metadata = {
  title: "Password Generator",
  description: "Generate a strong random password locally with secure browser cryptography and flexible character options.",
};

export default function PasswordGeneratorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Password Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-500">Make a fresh, hard-to-guess password with secure randomness on your device.</p>
      <p className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">Your files and text never leave your device. Processing stays in-browser, with no uploads or API calls. Your password stays in memory only and is never sent or saved; copying happens only when you click Copy.</p>
      <div className="mt-8"><PasswordGenerator /></div>
      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">How to use Password Generator</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Choose a length from 8 to 64 characters, then select the character groups permitted by the site or account where you will use it. The generator includes at least one character from every selected group and uses your browser’s cryptographic random number generator; it does not fall back to weaker randomness if secure crypto is unavailable. Generate password creates a new value in this page’s memory. Copy password sends it to your clipboard only after you press the button. The strength label is an estimate based on length and the number of selected character groups, not a guarantee against every attack. This tool does not store or transmit the password, so save it in a trusted password manager if you need to use it again.</p>
        <h3 className="mt-6 font-semibold text-slate-900">Three tips for safer passwords</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>Use a unique password for every important account. Reusing one password means a breach at one service can put others at risk.</li>
          <li>Prefer more length when the service allows it. If a website rejects symbols or has a maximum length, adjust the character groups and slider to its requirements.</li>
          <li>Store the result in a reputable password manager rather than a note or message. Avoid generating passwords on shared devices, and clear the page when you are finished.</li>
        </ol>
      </section>
    </div>
  );
}
