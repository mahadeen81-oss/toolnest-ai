"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Add the GA4 Measurement ID (for example, G-XXXXXXXXXX) in Replit
// Secrets/Environment Variables as NEXT_PUBLIC_GA_MEASUREMENT_ID.
// Analytics stays disabled when this variable is not set.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !pathname) return;

    const queryString = searchParams?.toString();
    const pagePath = `${pathname}${queryString ? `?${queryString}` : ""}`;
    const dataLayer = window.dataLayer || (window.dataLayer = []);

    if (typeof window.gtag === "function") {
      window.gtag("config", GA_MEASUREMENT_ID, { page_path: pagePath });
    } else {
      dataLayer.push(["config", GA_MEASUREMENT_ID, { page_path: pagePath }]);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.gtag = function(){window.dataLayer.push(arguments);}
window.gtag('js', new Date());
window.gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });`}
      </Script>
      <Script
        id="google-analytics-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}