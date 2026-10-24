import type { ToolIllustrationName } from "@/types/tool";

const TONES: Record<string, string> = {
  PDF: "bg-red-50",
  Writing: "bg-purple-50",
  Productivity: "bg-teal-50",
  Marketing: "bg-orange-50",
  "Content Creation": "bg-indigo-50",
};

function Art({ name }: { name: ToolIllustrationName }) {
  if (name === "product-description-generator") {
    return (
      <>
        <path d="M10 12h24l20 20-18 18L10 30z" fill="#fff" stroke="#4c1d95" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="21" cy="23" r="3.5" fill="#7c3aed" />
        <path d="M30 34l8-8M34 41l8-8" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="36" y="42" width="20" height="14" rx="3" fill="#7c3aed" stroke="#fff" strokeWidth="2" />
        <path d="M41 47h10M41 51h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </>
    );
  }
  if (name === "ai-writer") {
    return (
      <>
        <rect x="9" y="9" width="36" height="46" rx="5" fill="#fff" stroke="#4c1d95" strokeWidth="2.5" />
        <path d="M16 20h22M16 28h22M16 36h10" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M54 22L35 47l-3 8 8-3 19-25z" fill="#7c3aed" stroke="#4c1d95" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M45 33l6 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 8v8M46 12h8" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
      </>
    );
  }
  if (name === "text-summarizer") {
    return (
      <>
        <path d="M8 12h20M8 19h20M8 26h20M8 33h20M8 40h20" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" opacity=".55" />
        <path d="M30 31h5m-3-3l3 3-3 3" fill="none" stroke="#4c1d95" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="38" y="16" width="19" height="32" rx="4" fill="#fff" stroke="#4c1d95" strokeWidth="2.5" />
        <path d="M43 25h9M43 32h9M43 39h5" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 50h18" stroke="#4c1d95" strokeWidth="2.5" strokeLinecap="round" />
      </>
    );
  }
  if (name === "text-rewriter") {
    return (
      <>
        <rect x="16" y="18" width="32" height="28" rx="5" fill="#fff" stroke="#4c1d95" strokeWidth="2.5" />
        <path d="M23 28h18M23 36h11" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 30a21 21 0 0 1 36-14M52 34a21 21 0 0 1-36 14" fill="none" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" />
        <path d="M49 8v10H39M15 56V46h10" fill="none" stroke="#4c1d95" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    );
  }
  if (name === "social-media-post-generator") {
    return (
      <>
        <rect x="14" y="6" width="30" height="26" rx="5" fill="#ddd6fe" stroke="#4c1d95" strokeWidth="2.5" />
        <rect x="9" y="14" width="34" height="30" rx="5" fill="#fff" stroke="#4c1d95" strokeWidth="2.5" />
        <circle cx="19" cy="24" r="4" fill="#7c3aed" />
        <path d="M27 22h10M27 28h8M16 36h20" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 44l8 8v-8" fill="#fff" stroke="#4c1d95" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="49" cy="40" r="9" fill="#7c3aed" stroke="#fff" strokeWidth="2" />
        <path d="M49 35v6" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="49" cy="45" r="1.5" fill="#fff" />
      </>
    );
  }
  if (name === "youtube-script-generator") {
    return (
      <>
        <path d="M8 22l44-10 2 9L10 31z" fill="#7c3aed" stroke="#4c1d95" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M22 19l5 8M34 16l5 8M46 13l5 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="8" y="30" width="46" height="26" rx="4" fill="#fff" stroke="#4c1d95" strokeWidth="2.5" />
        <path d="M26 36l11 7-11 7z" fill="#7c3aed" stroke="#4c1d95" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 52h6M42 52h6" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
      </>
    );
  }
  if (name === "idea-generator") {
    return (
      <>
        <path d="M32 7a18 18 0 0 0-10 33c2 2 3 4 3 7h14c0-3 1-5 3-7A18 18 0 0 0 32 7z" fill="#fff" stroke="#4c1d95" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M26 53h12M28 58h8" stroke="#4c1d95" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M27 36l5-8 5 8" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 22h6M52 22h6M11 8l5 5M53 8l-5 5" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
      </>
    );
  }
  if (name === "title-generator") {
    return (
      <>
        <rect x="7" y="12" width="50" height="40" rx="6" fill="#fff" stroke="#4c1d95" strokeWidth="2.5" />
        <path d="M16 24h32" stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" />
        <path d="M16 33h32" stroke="#4c1d95" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 42h16" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="48" cy="44" r="8" fill="#7c3aed" stroke="#fff" strokeWidth="2" />
        <path d="M48 40v8M44 44h8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </>
    );
  }
  if (name === "merge-pdf") {
    return (
      <>
        <rect x="11" y="8" width="30" height="38" rx="4" fill="#fecaca" stroke="#4c1d95" strokeWidth="2.5" />
        <rect x="21" y="17" width="30" height="38" rx="4" fill="#fff" stroke="#4c1d95" strokeWidth="2.5" />
        <path d="M27 27h18M27 33h18M27 39h10" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="47" cy="48" r="10" fill="#7c3aed" stroke="#fff" strokeWidth="2" />
        <path d="M47 43v10M42 48h10" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </>
    );
  }
  if (name === "qr-code-generator") {
    const finder = (x: number, y: number) => (
      <>
        <rect x={x} y={y} width="18" height="18" rx="2" fill="#fff" stroke="#4c1d95" strokeWidth="3" />
        <rect x={x + 6} y={y + 6} width="6" height="6" fill="#7c3aed" />
      </>
    );
    return (
      <>
        {finder(8, 8)}
        {finder(38, 8)}
        {finder(8, 38)}
        <g fill="#0f766e">
          <rect x="38" y="38" width="6" height="6" />
          <rect x="50" y="38" width="6" height="6" />
          <rect x="44" y="44" width="6" height="6" />
          <rect x="38" y="50" width="6" height="6" />
          <rect x="50" y="50" width="6" height="6" />
          <rect x="29" y="30" width="5" height="5" />
          <rect x="29" y="8" width="5" height="5" />
        </g>
      </>
    );
  }
  return (
    <>
      <rect x="8" y="10" width="38" height="44" rx="5" fill="#fff" stroke="#4c1d95" strokeWidth="2.5" />
      <path d="M15 21h24M15 29h24M15 37h24M15 45h14" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" />
      <circle cx="47" cy="46" r="11" fill="#7c3aed" stroke="#fff" strokeWidth="2" />
      <path d="M40 43l2-1v8m-2 0h4M47 44a2 2 0 0 1 4 0c0 2-4 3-4 6h4" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

export default function ToolIllustration({
  name,
  category = "Productivity",
  size = 64,
  className = "",
}: {
  name: ToolIllustrationName;
  category?: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-2xl ${TONES[name === "merge-pdf" ? "PDF" : category] || TONES.Productivity} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" width="88%" height="88%" aria-hidden="true" focusable="false">
        <Art name={name} />
      </svg>
    </div>
  );
}
