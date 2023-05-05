/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     runtime: 'edge',
    // },
    env: {
        FIREBASE_API_KEY: 'AIzaSyDNyaO4eGjOFGKtGRJhv4bQ-1t1T3Rp-hM',
        FIREBASE_AUTH_DOMAIN: 'loan-application-6e366.firebaseapp.com',
        FIREBASE_PROJECT_ID: 'loan-application-6e366',
        FIREBASE_STORAGE_BUCKET: 'loan-application-6e366.appspot.com',
        FIREBASE_MESSAGING_SENDER_ID: '540105200444',
        FIREBASE_APP_ID: '1:540105200444:web:33efa981e7c0dbdd054439',
        FIREBASE_MEASUREMENT_ID: 'G-VB0XYZ0ZM1'
    },
    reactStrictMode: true,
    swcMinify: true,
}
module.exports = nextConfig