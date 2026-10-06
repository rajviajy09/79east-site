import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keystatic's one-time GitHub setup redirects the browser to 127.0.0.1.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
