import type { NextConfig } from "next";

/**
 * Centralized remote-image host configuration.
 *
 * When a real project image URL is provided later, add its host here
 * as a new entry in `remotePatterns`. This is the ONLY place a new
 * image host needs to be registered — no other configuration change
 * is required to display a remote image through next/image.
 *
 * Do not widen this to a wildcard/catch-all pattern; keep it an
 * explicit allowlist per brief section 11.
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Example (uncomment / duplicate when a real host is known):
      // {
      //   protocol: "https",
      //   hostname: "res.cloudinary.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "raw.githubusercontent.com",
      // },
    ],
  },
};

export default nextConfig;
