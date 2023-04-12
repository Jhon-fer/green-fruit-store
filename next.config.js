/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['platzi-avo.vercel.app'],
  },
  output: 'export'
}

module.exports = nextConfig
