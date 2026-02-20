/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/qubicdb-web' : '',
  assetPrefix: isProd ? '/qubicdb-web/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
