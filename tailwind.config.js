/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/context/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
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
            screens: {
                'xxl': '1441px',
            },
            colors: {
                'bannerHeading': 'rgba(38, 48, 65, 1)',
                'bannerSubHeading': 'rgba(82, 92, 122, 1)',
                'bannerFormHeading': 'rgba(74, 74, 74, 1)',
                'bannerFooterHeading': 'rgba(82, 92, 122, 1)',
                'dark': '#1A1A1A',
                'primary': '#263041',
                'secondary': '#F9B400',
            }
        },
        fontFamily: {
            primary: ['Poppins', 'sans-serif'],
        }
    },
    plugins: [],
}
