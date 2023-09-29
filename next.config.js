/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://https://next-portfolio-cyan-nine.vercel.app/:path*',
      },
    ]
  }
}

module.exports = nextConfig
