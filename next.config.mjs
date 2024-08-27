/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
  },
};

export default nextConfig;
