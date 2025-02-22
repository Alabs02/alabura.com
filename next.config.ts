import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const nextConfig: NextConfig = withBundleAnalyzer({
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: ["assets.aceternity.com", "images.unsplash.com", "firebasestorage.googleapis.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/demos/**",
        search: ""
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
        search: ""
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
        search: ""
      }
    ],
    deviceSizes: [640, 750, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 128]
  },
  experimental: {
    cssChunking: true,
    // useLightningcss: true,
    webVitalsAttribution: ["CLS", "LCP"],
    turbo: {
      moduleIdStrategy: "deterministic",
      resolveAlias: {
        underscore: "lodash"
      },
      resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"]
    }
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  headers: async () =>
    process.env.NODE_ENV === "production"
      ? [
          {
            source: "/(.*)",
            headers: [
              {
                key: "Cache-Control",
                value: "public, max-age=31536000, immutable"
              }
            ]
          }
        ]
      : []
}) satisfies NextConfig;

export default nextConfig;
