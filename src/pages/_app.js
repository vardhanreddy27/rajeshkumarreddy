import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { Merriweather, Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-heading",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${sourceSans.variable} ${merriweather.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

/**
 * Core Web Vitals reporting — a Google ranking factor.
 * Logs CLS, FID, FCP, LCP, TTFB metrics.
 * Replace console.log with analytics endpoint for production tracking.
 */
export function reportWebVitals(metric) {
  if (process.env.NODE_ENV === "production") {
    // Send to analytics — replace with your endpoint
    // e.g., Google Analytics, Vercel Analytics, etc.
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
    });
    // navigator.sendBeacon('/api/vitals', body);
  }
}
