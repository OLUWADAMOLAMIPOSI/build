import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
/** @type {import('next').NextConfig} */
const NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ don't fail the build on lint warnings
  },
};

export default nextConfig;

