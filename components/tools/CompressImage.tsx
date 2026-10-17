"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";

type ImageResult = { url: string; size: number; quality: number };
type ImageItem = { id: number; file: File; previewUrl: string; result?: ImageResult; error?: string };

function formatSize(bytes: number): string {
  return bytes < 1024 * 1024
    ? `${(bytes / 1024).toFixed(1)} KB`
    : `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      if (image.naturalWidth && image.naturalHeight) resolve(image);
      else reject(new Error("This image has no readable dimensions."));
    };
    image.onerror = () => reject(new Error("Couldn't open this image. Try a fresh JPG or PNG copy."));
    image.src = url;
  });
}

async function compressToJpeg(url: string, quality: number): Promise<Blob> {
  const image = await loadImage(url);
  const canvas = document.createElement("canvas");
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  try {
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Image processing is unavailable in this browser.");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0);
    return await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (blob) => blob && blob.type === "image/jpeg"
          ? resolve(blob)
          : reject(new Error("Couldn't compress this image. It may be too large for this browser. Try a smaller copy.")),
        "image/jpeg",
        quality / 100,
      );
    });
  } finally {
    canvas.width = 0;
    canvas.height = 0;
  }
}

export default function CompressImage() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [quality, setQuality] = useState(80);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const nextId = useRef(0);
  const urls = useRef(new Set<string>());
  const active = useRef(true);

  useEffect(() => {
    active.current = true;
    return () => {
      active.current = false;
      urls.current.forEach((url) => URL.revokeObjectURL(url));
      urls.current.clear();
    };
  }, []);

  function release(url: string) {
    URL.revokeObjectURL(url);
    urls.current.delete(url);
  }

  function selectFiles(event: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.currentTarget.files || []);
    event.currentTarget.value = "";
    const accepted = selected.filter((file) =>
      ["image/jpeg", "image/png"].includes(file.type) || /\.(jpe?g|png)$/i.test(file.name),
    );
    const additions = accepted.map((file) => {
      const previewUrl = URL.createObjectURL(file);
      urls.current.add(previewUrl);
      return { id: ++nextId.current, file, previewUrl };
    });
    setImages((current) => [...current, ...additions]);
    setError(accepted.length !== selected.length ? "Only JPG and PNG images are supported. Other files were skipped." : "");
    setStatus("");
  }

  function changeQuality(value: number) {
    images.forEach((image) => { if (image.result) release(image.result.url); });
    setImages((current) => current.map((image) => ({ ...image, result: undefined, error: undefined })));
    setQuality(value);
    setStatus("");
  }

  function remove(id: number) {
    const image = images.find((item) => item.id === id);
    if (!image) return;
    release(image.previewUrl);
    if (image.result) release(image.result.url);
    setImages((current) => current.filter((item) => item.id !== id));
    setStatus("");
  }

  async function compress() {
    setBusy(true);
    setError("");
    let succeeded = 0;
    for (const [index, image] of images.entries()) {
      if (!active.current) return;
      setStatus(`Compressing image ${index + 1} of ${images.length}…`);
      if (image.result) release(image.result.url);
      setImages((current) => current.map((item) =>
        item.id === image.id ? { ...item, result: undefined, error: undefined } : item,
      ));
      try {
        const blob = await compressToJpeg(image.previewUrl, quality);
        if (!active.current) return;
        const url = URL.createObjectURL(blob);
        urls.current.add(url);
        succeeded += 1;
        setImages((current) => current.map((item) =>
          item.id === image.id ? { ...item, result: { url, size: blob.size, quality } } : item,
        ));
      } catch (compressionError) {
        if (!active.current) return;
        const message = compressionError instanceof Error ? compressionError.message : "Couldn't compress this image. Please try another file.";
        setImages((current) => current.map((item) => item.id === image.id ? { ...item, error: message } : item));
      }
    }
    if (active.current) {
      setBusy(false);
      setStatus(`${succeeded} of ${images.length} images ready. Download each result below.`);
    }
  }

  return (
    <div className="space-y-5 rounded-3xl border border-violet-100 bg-white/95 p-5 shadow-sm sm:p-6">
      <div>
        <label htmlFor="compress-image-files" className="mb-2 block text-sm font-medium text-slate-700">Choose JPG or PNG images</label>
        <input id="compress-image-files" type="file" accept=".jpg,.jpeg,.png,image/jpeg,image/png" multiple disabled={busy} onChange={selectFiles} className="block w-full rounded-xl border border-slate-300 text-sm text-slate-600 file:mr-3 file:border-0 file:bg-brand-500 file:px-4 file:py-3 file:font-semibold file:text-white disabled:opacity-50" />
      </div>
      <p className="rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        Results are JPEG files at the original pixel dimensions. Compression is lossy:
        check the preview before using it. Transparent PNG areas become white.
        Your original files are not changed.
      </p>
      <div>
        <label htmlFor="compress-image-quality" className="block text-sm font-medium text-slate-700">JPEG quality: {quality}%</label>
        <input id="compress-image-quality" type="range" min={40} max={100} step={5} value={quality} disabled={busy} onChange={(event) => changeQuality(Number(event.target.value))} aria-valuetext={`${quality} percent quality`} className="mt-3 w-full accent-violet-600" />
        <p className="mt-1 text-xs leading-5 text-slate-500">Lower quality often means smaller files. Higher quality keeps more detail. Changing the slider clears previous results.</p>
      </div>
      {error && <p role="alert" className="rounded-xl bg-rose-50 p-4 text-sm text-rose-700">{error}</p>}
      <button type="button" disabled={busy || !images.length} onClick={compress} className="w-full rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">
        {busy ? "Compressing…" : "Compress selected images"}
      </button>
      <p role="status" className="text-sm text-slate-500">{status}</p>
      {images.length ? (
        <ul className="space-y-4">
          {images.map((image) => {
            const saved = image.result ? Math.round((1 - image.result.size / Math.max(1, image.file.size)) * 100) : 0;
            return (
              <li key={image.id} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="min-w-0 break-words text-sm font-semibold text-slate-800">{image.file.name}</p>
                  <button type="button" disabled={busy} onClick={() => remove(image.id)} aria-label={`Remove ${image.file.name}`} className="shrink-0 rounded-lg border border-rose-200 px-3 py-2 text-xs font-semibold text-rose-700 disabled:opacity-40">Remove</button>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <img src={image.previewUrl} alt={`Original ${image.file.name}`} width={160} height={120} className="h-28 w-full rounded-xl bg-slate-50 object-contain" />
                    <p className="mt-2 text-xs text-slate-500">Original: {formatSize(image.file.size)}</p>
                  </div>
                  {image.result && (
                    <div>
                      <img src={image.result.url} alt={`Compressed ${image.file.name}`} width={160} height={120} className="h-28 w-full rounded-xl bg-slate-50 object-contain" />
                      <p className="mt-2 text-xs text-slate-500">New: {formatSize(image.result.size)} · {image.result.quality}% quality</p>
                    </div>
                  )}
                </div>
                {image.error && <p role="alert" className="mt-3 text-sm text-rose-700">{image.error}</p>}
                {image.result && (
                  <div className="mt-4">
                    <p className={`text-sm font-semibold ${saved < 0 ? "text-amber-700" : "text-emerald-700"}`}>
                      {saved < 0 ? `${Math.abs(saved)}% larger — try a lower quality level.` : `${saved}% saved`}
                    </p>
                    <a href={image.result.url} download={`${image.file.name.replace(/\.[^.]+$/, "")}-compressed.jpg`} className="mt-3 inline-block rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">
                      Download compressed image
                    </a>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-500">Choose images to compare their original and compressed sizes.</p>
      )}
    </div>
  );
}
