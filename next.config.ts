import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   experimental: {
    turbo: {
      // Turbopack production beta enable
    },
  },
};

export default nextConfig;
