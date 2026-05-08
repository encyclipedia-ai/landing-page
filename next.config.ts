import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Marketing site — no workspace packages, no native deps. Allow indexing.
  // Pin Turbopack's project root to this repo so it doesn't pick up the
  // sibling monorepo's pnpm-lock.yaml.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
