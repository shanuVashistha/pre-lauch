/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        runtime: 'edge'
    },
    formats: ['image/webp', 'image/png', 'image/svg', 'image/jpg', 'image/jpeg']
}

module.exports = nextConfig