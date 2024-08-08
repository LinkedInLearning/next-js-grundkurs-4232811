/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['sequelize', 'mysql2']
  },
  async rewrites() {
    return [
      {
        source: '/special',
        destination: '/blog/3'
      },
      {
        source: '/alter-beitrag',
        destination: 'http://localhost:3000/blog/1'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/b/:id',
        destination: '/blog/:id',
        permanent: true
      }
    ]
  },
};

export default nextConfig;
