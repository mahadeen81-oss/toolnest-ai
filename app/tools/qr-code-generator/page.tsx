import type { Metadata } from "next";
import QrCodeGenerator from "@/components/tools/QrCodeGenerator";
import ToolIllustration from "@/components/ToolIllustration";
import ToolGuide from "@/components/tools/ToolGuide";
import { getToolBySlug } from "@/lib/tools-config";

export const metadata: Metadata = {
  title: "QR Code Generator",
  description: "Turn text or a link into a downloadable PNG QR code. Choose a size from 128 to 1024 pixels and generate it in your browser.",
};

export default function QrCodeGeneratorPage() {
  const illustration = getToolBySlug("qr-code-generator")?.illustration;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <span className="mb-3 inline-block rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">Productivity</span>
      <div className="flex items-center gap-4">
        {illustration && <ToolIllustration name={illustration} size={72} />}
        <h1 className="text-2xl font-bold text-slate-900">QR Code Generator</h1>
      </div>
      <p className="mt-2 max-w-2xl text-slate-500">Make a scannable code for a link, Wi-Fi note, or short message, then save it as an image.</p>
      <p className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">The text you enter stays in this tool. The code is drawn locally on a canvas and the tool makes no API calls. Download saves the PNG only to your device.</p>
      <div className="mt-8"><QrCodeGenerator /></div>
      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">About this tool</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">A QR code is a square pattern of dark and light modules that a phone camera decodes back into text. This generator draws the pattern on a canvas as you type, so the preview always matches your current text and size. The image includes a four-module blank border, called the quiet zone, which scanners rely on to find the edges. If the selected size is too small to hold every module plus that border, the tool asks for a larger size instead of silently changing the image, so the PNG you download always has the pixel dimensions you chose. Long text creates a denser pattern, which needs more pixels per module to stay readable. Print tests are the best check: scan the result from the distance your audience will use.</p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">How to use this tool</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>Type or paste a link or text. It is encoded exactly as entered.</li>
          <li>Pick an image size. Larger sizes suit print.</li>
          <li>Check the live preview.</li>
          <li>Press Download PNG to save the image.</li>
        </ol>
        <h3 className="mt-6 font-semibold text-slate-900">Worked examples</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>A 256 px code works well on a screen, such as a link on a slide.</li>
          <li>A 512 px code gives a sharper print for a flyer. Use 1024 px for posters.</li>
          <li>Short text such as a 40-character URL makes a simpler pattern than a 600-character paragraph.</li>
        </ul>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Frequently asked questions</h2>
        <h3 className="mt-4 font-semibold text-slate-900">Will every phone read the code?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">Not necessarily. Scan the saved image with at least one phone at the real size and distance before you print many copies.</p>
        <h3 className="mt-4 font-semibold text-slate-900">Is there a length limit?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">Yes. This tool accepts up to 2,000 characters, and a QR code has its own capacity limit. Shorter content is easier to scan.</p>
        <h3 className="mt-4 font-semibold text-slate-900">Does it open my link?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">No. The text is encoded as is and nothing is visited or checked.</p>
      </section>
      <ToolGuide toolId="qr-code-generator" />
    </div>
  );
}
