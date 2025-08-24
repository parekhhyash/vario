/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        lime: {
          400: '#d0fa49',
          300: '#d4fb5c',
          100: '#f0fdb4',
        },
        purple: {
          400: '#a293ff',
          300: '#b5a8ff',
          100: '#e5e0ff',
        },
        pink: {
          400: '#ff87a6',
          300: '#ff9bb5',
          100: '#ffe0e8',
        },
        orange: {
          400: '#ff9601',
          300: '#ffa520',
          100: '#ffe4c4',
        },
      },
      borderWidth: {
        '6': '6px',
      },
    },
  },
  plugins: [],
};