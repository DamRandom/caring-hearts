import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes cuando hagas export
  },
};

export default nextConfig;
