/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdnbbsr.s3waas.gov.in" },
      { protocol: "http", hostname: "gazeis.in" },
      { protocol: "https", hostname: "files.yappe.in" },
      { protocol: "https", hostname: "media.andhrajyothy.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "www.livelaw.in" },
      { protocol: "https", hostname: "i.pinimg.com" }
    ],
  },
};

export default nextConfig;
