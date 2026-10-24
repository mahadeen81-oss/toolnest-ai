"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

const SIZES = [128, 192, 256, 512, 1024] as const;
const MAX_LENGTH = 2000;

export default function QrCodeGenerator() {
  const [text, setText] = useState("");
  const [size, setSize] = useState<number>(256);
  const [error, setError] = useState("");
  const [readyKey, setReadyKey] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cancelled = false;
    const canvas = canvasRef.current;
    setReadyKey("");
    if (!text.trim()) { setError(""); return; }
    if (text.length > MAX_LENGTH) {
      setError(`This text is ${text.length.toLocaleString()} characters. Shorten it to ${MAX_LENGTH.toLocaleString()} characters or fewer.`);
      return;
    }
    if (!canvas) return;
    try {
      const needed = QRCode.create(text, { errorCorrectionLevel: "M" }).modules.size + 8;
      if (needed > size) {
        setError(`This text needs an image of at least ${needed} px, but ${size} px is selected. Choose a larger size or shorten the text.`);
        return;
      }
    } catch {
      setError("This text is too long to fit in a QR code at this error-correction level. Shorten it and try again.");
      return;
    }
    const key = `${size}:${text}`;
    QRCode.toCanvas(canvas, text, { width: size, margin: 4, errorCorrectionLevel: "M" })
      .then(() => { if (!cancelled) { setError(""); setReadyKey(key); } })
      .catch(() => { if (!cancelled) { setReadyKey(""); setError("This text is too long to fit in a QR code at this error-correction level. Shorten it and try again."); } });
    return () => { cancelled = true; };
  }, [text, size]);

  const ready = readyKey === `${size}:${text}` && !error;

  function download() {
    const canvas = canvasRef.current;
    if (!canvas || !ready) return;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `qr-code-${size}px.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <div className="rounded-3xl border border-violet-100 bg-white/95 p-5 shadow-sm sm:p-6">
      <label htmlFor="qr-text" className="mb-2 block text-sm font-medium text-slate-700">Text or URL to encode</label>
      <textarea id="qr-text" rows={4} value={text} onChange={(event) => setText(event.target.value)} placeholder="https://example.com/menu" className="w-full resize-y rounded-xl border border-slate-300 px-3.5 py-3 text-sm leading-6 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
      <p className="mt-1 text-xs text-slate-500">{text.length.toLocaleString()} / {MAX_LENGTH.toLocaleString()} characters. Your text is encoded exactly as typed.</p>
      <label htmlFor="qr-size" className="mb-2 mt-4 block text-sm font-medium text-slate-700">Image size</label>
      <select id="qr-size" value={size} onChange={(event) => setSize(Number(event.target.value))} className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 sm:w-60">
        {SIZES.map((value) => <option key={value} value={value}>{value} x {value} px</option>)}
      </select>
      {error && <p role="alert" className="mt-4 rounded-xl bg-rose-50 p-4 text-sm leading-6 text-rose-700">{error}</p>}
      {!text.trim() && !error && <p className="mt-4 text-sm text-slate-500">Enter text or a link to generate a QR code.</p>}
      <div className={ready ? "mt-5 rounded-2xl border border-violet-200 bg-violet-50/70 p-4" : "hidden"}>
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Preview</p>
        <div className="mt-3 flex justify-center overflow-hidden rounded-xl bg-white p-2">
          <canvas ref={canvasRef} aria-label="Generated QR code" role="img" className="!h-auto !max-w-full" />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" disabled={!ready} onClick={download} className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50">Download PNG</button>
        <button type="button" disabled={!text} onClick={() => setText("")} className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">Clear</button>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">The code is drawn in this browser. Always test a printed or saved code with a phone before sharing it.</p>
    </div>
  );
}
