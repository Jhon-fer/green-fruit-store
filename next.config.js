/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['platzi-avo.vercel.app'],
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
}

module.exports = nextConfig
