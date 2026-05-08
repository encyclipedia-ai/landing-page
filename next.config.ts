import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static-only marketing site. `output: "export"` produces a fully
  // self-contained ./out/ dir of HTML/CSS/JS suitable for GitHub Pages,
  // Cloudflare Pages, S3, or any plain static host.
  output: "export",
  // GitHub Pages doesn't run the Next image optimizer, so emit raw <img>.
  images: { unoptimized: true },
  // Pin Turbopack's project root to this repo so it doesn't pick up the
  // sibling monorepo's pnpm-lock.yaml.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
