/** @type {import('next').NextConfig} */
const path = require('path')


const nextConfig = {
  reactStrictMode: true,
  experimental:{appDir: true},
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/CoderMariusz/**',
      },
    ],
  },

}

module.exports = nextConfig
