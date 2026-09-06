import type { NextConfig } from "next";

// Static export: the site is deployed as plain HTML/CSS/JS to shared/cPanel
// hosting with no Node runtime, so no next/image optimizer or ISR is available.
//
// basePath/assetPrefix are only non-empty for the GitHub Pages preview build
// (a project site served from /<repo-name>/, set via NEXT_PUBLIC_BASE_PATH in
// .github/workflows/deploy-pages.yml). The real cPanel production deploy
// serves from the domain root, so this stays empty there.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
