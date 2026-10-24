import type { ToolIllustrationName } from "@/types/tool";

const TONES: Record<string, string> = {
  PDF: "bg-red-50",
  Writing: "bg-purple-50",
  Productivity: "bg-teal-50",
};

function Art({ name }: { name: ToolIllustrationName }) {
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
