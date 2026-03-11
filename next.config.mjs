import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "rajeshkumarreddyadvocatekadapa.com",
          },
        ],
        destination: "https://www.rajeshkumarreddyadvocatekadapa.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.rajeshkumarreddyadvocatekadapa.com",
          },
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://www.rajeshkumarreddyadvocatekadapa.com/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
    remotePatterns: [
      { protocol: "https", hostname: "cdnbbsr.s3waas.gov.in" },
      { protocol: "https", hostname: "gazeis.in" },
      { protocol: "https", hostname: "files.yappe.in" },
      { protocol: "https", hostname: "media.andhrajyothy.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "www.livelaw.in" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "imagesvs.oneindia.com" },
      { protocol: "https", hostname: "i.pinimg.com" },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);