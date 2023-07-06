/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['s3.amazonaws.com'],
    },
    reactStrictMode: true,
    swcMinify: true,
}
module.exports = nextConfig