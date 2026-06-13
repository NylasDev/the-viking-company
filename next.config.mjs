/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — same deployment model as the Hermes Agent site (Next.js
  // statically rendered, no server needed). Output lands in ./out
  output: "export",
  images: {
    // next/image optimisation is server-side; disable for a pure static export.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
