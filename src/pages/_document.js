import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-IN" dir="ltr">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="format-detection" content="telephone=no" />

        {/* DNS prefetch for external image domains — faster LCP */}
        <link rel="dns-prefetch" href="https://cdnbbsr.s3waas.gov.in" />
        <link rel="dns-prefetch" href="https://files.yappe.in" />
        <link rel="dns-prefetch" href="https://media.andhrajyothy.com" />
        <link rel="dns-prefetch" href="https://imagesvs.oneindia.com" />
        <link rel="dns-prefetch" href="https://upload.wikimedia.org" />
        <link rel="dns-prefetch" href="https://www.livelaw.in" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />

        {/* Preconnect to Google Fonts (used via next/font) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Verification — add your Google Search Console / Bing Webmaster IDs here */}
        {/* <meta name="google-site-verification" content="YOUR_CODE" /> */}
        {/* <meta name="msvalidate.01" content="YOUR_CODE" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
