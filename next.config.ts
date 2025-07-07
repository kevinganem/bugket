// Next.js config for local dev and GitHub Pages static export
// Configuration adaptée pour un domaine personnalisé (plus de basePath ni assetPrefix)
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
