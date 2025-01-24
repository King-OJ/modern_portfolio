import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-hosting.imagekit.io",
        port: "",
        pathname: "//ec3906bc668e4ed3/**",
      },
    ],
  },
};

export default nextConfig;
