/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/utils/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'bannerHeading': 'rgba(38, 48, 65, 1)',
                'bannerSubHeading': 'rgba(82, 92, 122, 1)',
                'bannerFormHeading': 'rgba(74, 74, 74, 1)',
                'bannerFooterHeading': 'rgba(82, 92, 122, 1)',
            }
        },
    },
    plugins: [],
}
