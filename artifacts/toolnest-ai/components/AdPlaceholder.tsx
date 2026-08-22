/**
 * Clearly-labeled placeholder for future monetization slots (AdSense,
 * sidebar ads, premium upsells). Swap the inner content for real ad code
 * once the site is approved and traffic-ready — do not add real ad tags yet.
 */
export default function AdPlaceholder({
  variant = "banner",
}: {
  variant?: "banner" | "sidebar" | "premium";
}) {
  const config = {
    banner: {
      label: "Ad placeholder — banner (e.g. 728×90)",
      className: "h-24 w-full",
    },
    sidebar: {
      label: "Ad placeholder — sidebar (e.g. 300×250)",
      className: "h-64 w-full",
    },
    premium: {
      label: "Premium upgrade placeholder",
      className: "h-40 w-full",
    },
  }[variant];

  return (
    <div
      className={`${config.className} flex items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-xs font-medium text-slate-400`}
      aria-hidden="true"
    >
      {config.label}
    </div>
  );
}
