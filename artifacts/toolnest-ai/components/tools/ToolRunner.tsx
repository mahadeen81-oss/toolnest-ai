"use client";

import { useState } from "react";
import { ToolField } from "@/types/tool";

export default function ToolRunner({
  toolId,
  fields,
  generateLabel = "Generate",
}: {
  toolId: string;
  fields: ToolField[];
  generateLabel?: string;
}) {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(
      fields.map((f) => [f.id, f.type === "select" ? f.options?.[0] || "" : ""])
    )
  );
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function updateField(id: string, value: string) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  function validate(): string | null {
    for (const field of fields) {
      if (field.required !== false && !values[field.id]?.trim()) {
        return `Please fill in "${field.label}" before generating.`;
      }
    }
    return null;
  }

  async function handleGenerate() {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setOutput("");
    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toolId, inputs: values }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setOutput(data.text);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while generating your result. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setValues(
      Object.fromEntries(
        fields.map((f) => [f.id, f.type === "select" ? f.options?.[0] || "" : ""])
      )
    );
    setOutput("");
    setError("");
  }

  async function handleCopy() {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setError("Couldn't copy to clipboard. Please copy the text manually.");
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Input panel */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="space-y-5">
          {fields.map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                {field.label}
              </label>

              {field.type === "textarea" && (
                <textarea
                  id={field.id}
                  value={values[field.id] || ""}
                  onChange={(e) => updateField(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  rows={6}
                  className="w-full resize-y rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              )}

              {field.type === "text" && (
                <input
                  id={field.id}
                  type="text"
                  value={values[field.id] || ""}
                  onChange={(e) => updateField(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              )}

              {field.type === "select" && (
                <select
                  id={field.id}
                  value={values[field.id] || ""}
                  onChange={(e) => updateField(field.id, e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>

        {error && (
          <p role="alert" className="mt-4 rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-600">
            {error}
          </p>
        )}

        <div className="mt-6 flex gap-3">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="flex-1 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Generating&hellip;
              </span>
            ) : (
              generateLabel
            )}
          </button>
          <button
            onClick={handleClear}
            disabled={loading}
            className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-60"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Output panel */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-700">Result</h3>
          <button
            onClick={handleCopy}
            disabled={!output}
            className="text-xs font-semibold text-brand-600 transition hover:underline disabled:cursor-not-allowed disabled:text-slate-300"
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>
        <div className="min-h-[220px] whitespace-pre-wrap rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
          {output || (
            <span className="text-slate-400">
              Your generated result will appear here.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
