import type { NextConfig } from "next";

/**
 * Static-export only. This repo has no server runtime (GitHub Pages), so there
 * are no API routes and no admin panel — project data is read from
 * data/portfolio-config.json at build time.
 *
 * No basePath: as a GitHub user site this is served from the domain root.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
