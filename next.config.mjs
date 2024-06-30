/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_BASE_PATH,
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
