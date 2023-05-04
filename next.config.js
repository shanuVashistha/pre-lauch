/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        runtime: 'edge'
    },
    formats: ['image/webp', 'image/png', 'image/svg', 'image/jpg', 'image/jpeg', 'image/avif', 'image/gif']
}

module.exports = nextConfig