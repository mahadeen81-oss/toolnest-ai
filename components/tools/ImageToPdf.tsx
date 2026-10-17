"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";

type ImageItem = {
  id: number;
  file: File;
  previewUrl: string;
};

type PageSize = "a4" | "fit";

function isSupportedImage(file: File): boolean {
  const name = file.name.toLowerCase();
  return (
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    /\.(jpe?g|png)$/.test(name)
  );
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function readAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error(`Couldn't read ${file.name}.`));
      }
    };
    reader.onerror = () => reject(new Error(`Couldn't read ${file.name}.`));
    reader.readAsDataURL(file);
  });
}

function getImageDimensions(source: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      if (!image.naturalWidth || !image.naturalHeight) {
        reject(new Error("One of the selected images has no readable dimensions."));
        return;
      }
      resolve({ width: image.naturalWidth, height: image.naturalHeight });
    };
    image.onerror = () => reject(new Error("One of the selected images couldn't be decoded."));
    image.src = source;
  });
}

export default function ImageToPdf() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [pageSize, setPageSize] = useState<PageSize>("a4");
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");
  const imageId = useRef(0);
  const previewUrls = useRef(new Set<string>());

  useEffect(
    () => () => {
      previewUrls.current.forEach((url) => URL.revokeObjectURL(url));
      previewUrls.current.clear();
    },
    [],
  );

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.currentTarget.files || []);
    event.currentTarget.value = "";

    const accepted = selectedFiles.filter(isSupportedImage);
    const rejectedCount = selectedFiles.length - accepted.length;
    const additions = accepted.map((file) => {
      const previewUrl = URL.createObjectURL(file);
      previewUrls.current.add(previewUrl);
      imageId.current += 1;
      return { id: imageId.current, file, previewUrl };
    });

    setImages((current) => [...current, ...additions]);
    setError(
      rejectedCount
        ? "Only JPG and PNG images are supported. The other selected files were skipped."
        : "",
    );
  }

  function moveImage(index: number, direction: -1 | 1) {
    setImages((current) => {
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= current.length) return current;
      const reordered = [...current];
      [reordered[index], reordered[targetIndex]] = [reordered[targetIndex], reordered[index]];
      return reordered;
    });
  }

  function removeImage(id: number) {
    const removed = images.find((image) => image.id === id);
    if (!removed) return;
    URL.revokeObjectURL(removed.previewUrl);
    previewUrls.current.delete(removed.previewUrl);
    setImages((current) => current.filter((image) => image.id !== id));
    setError("");
  }

  async function downloadPdf() {
    if (!images.length) {
      setError("Choose at least one JPG or PNG image first.");
      return;
    }

    setError("");
    setGenerating(true);
    try {
      const { jsPDF } = await import("jspdf");
      const prepared = await Promise.all(
        images.map(async (item) => {
          const dataUrl = await readAsDataUrl(item.file);
          const dimensions = await getImageDimensions(dataUrl);
          return { ...item, dataUrl, ...dimensions };
        }),
      );

      const pxToMm = (pixels: number) => (pixels * 25.4) / 96;
      const formatFor = (image: (typeof prepared)[number]) =>
        pageSize === "a4"
          ? "a4"
          : [Math.max(1, pxToMm(image.width)), Math.max(1, pxToMm(image.height))];
      const orientationFor = (image: (typeof prepared)[number]) =>
        image.width > image.height ? "landscape" : "portrait";

      const first = prepared[0];
      const pdf = new jsPDF({
        orientation: orientationFor(first),
        unit: "mm",
        format: formatFor(first),
        compress: true,
      });

      prepared.forEach((image, index) => {
        const orientation = orientationFor(image);
        if (index > 0) {
          pdf.addPage(formatFor(image), orientation);
        }

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const scale = Math.min(pageWidth / image.width, pageHeight / image.height);
        const renderedWidth = image.width * scale;
        const renderedHeight = image.height * scale;
        const x = (pageWidth - renderedWidth) / 2;
        const y = (pageHeight - renderedHeight) / 2;
        const format = image.file.name.toLowerCase().endsWith(".png") ? "PNG" : "JPEG";

        pdf.addImage(
          image.dataUrl,
          format,
          x,
          y,
          renderedWidth,
          renderedHeight,
          undefined,
          "FAST",
        );
      });

      pdf.save("images-to-pdf.pdf");
    } catch (generationError) {
      setError(
        generationError instanceof Error
          ? generationError.message
          : "Couldn't create the PDF. Please try again with different images.",
      );
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div className="space-y-5">
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">
        Your images stay on your device. They are not uploaded; the PDF is created
        locally in your browser.
      </div>

      <div className="rounded-3xl border border-violet-100 bg-white/95 p-5 shadow-sm sm:p-6">
        <div>
          <label
            htmlFor="image-to-pdf-files"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Choose JPG or PNG images
          </label>
          <input
            id="image-to-pdf-files"
            type="file"
            accept=".jpg,.jpeg,.png,image/jpeg,image/png"
            multiple
            onChange={handleFilesSelected}
            className="block w-full cursor-pointer rounded-xl border border-slate-300 bg-white text-sm text-slate-600 file:mr-4 file:cursor-pointer file:border-0 file:bg-brand-500 file:px-4 file:py-3 file:text-sm file:font-semibold file:text-white hover:file:bg-brand-600"
          />
        </div>

        <div className="mt-5">
          <label htmlFor="pdf-page-size" className="mb-2 block text-sm font-medium text-slate-700">
            PDF page size
          </label>
          <select
            id="pdf-page-size"
            value={pageSize}
            onChange={(event) => setPageSize(event.target.value as PageSize)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 sm:max-w-xs"
          >
            <option value="a4">A4 (fit image to page)</option>
            <option value="fit">Fit page to image</option>
          </select>
        </div>

        {images.length > 0 ? (
          <ol className="mt-6 space-y-3" aria-label="Images in PDF order">
            {images.map((image, index) => (
              <li
                key={image.id}
                className="flex min-w-0 flex-col gap-3 rounded-2xl border border-slate-200 p-3 sm:flex-row sm:items-center"
              >
                <img
                  src={image.previewUrl}
                  alt={`Preview of ${image.file.name}`}
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] shrink-0 rounded-xl bg-slate-50 object-contain"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    {index + 1}. {image.file.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{formatFileSize(image.file.size)}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => moveImage(index, -1)}
                    disabled={index === 0}
                    aria-label={`Move ${image.file.name} up`}
                    className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Move up
                  </button>
                  <button
                    type="button"
                    onClick={() => moveImage(index, 1)}
                    disabled={index === images.length - 1}
                    aria-label={`Move ${image.file.name} down`}
                    className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Move down
                  </button>
                  <button
                    type="button"
                    onClick={() => removeImage(image.id)}
                    aria-label={`Remove ${image.file.name}`}
                    className="rounded-lg border border-rose-200 px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-50"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-5 rounded-2xl bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
            Your selected image previews will appear here.
          </p>
        )}

        {error && (
          <p role="alert" className="mt-4 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={downloadPdf}
          disabled={!images.length || generating}
          className="mt-5 w-full rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {generating ? "Creating PDF…" : "Download one PDF"}
        </button>
      </div>
    </div>
  );
}
