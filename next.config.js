/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // images: { unoptimized: true }, // only if you use <Image>
  
  // Environment variables for static export
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  
  // Ensure analytics work in production
  trailingSlash: true,
}
module.exports = nextConfig
