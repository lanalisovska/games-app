import type { NextConfig } from "next";

const config: NextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/tournaments", permanent: false }];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "my-json-server.typicode.com" },
    ],
  },
};

export default config;
