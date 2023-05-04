/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        runtime: 'edge'
    },
    assetPrefix: "/public"
}

module.exports = nextConfig