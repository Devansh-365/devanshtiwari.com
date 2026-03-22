/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.giphy.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/projects/:id',
        destination: '/work',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
