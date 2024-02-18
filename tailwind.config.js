/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['DM Sans', 'Manrope', 'sans-serif'],
        accent: ['Rock Salt', 'Reenie Beanie', 'cursive'],
      },
      letterSpacing: {
        tight: '-0.08rem',
        normal: '0',
        wide: '0.1em',
      },
      colors: {
        black: '#272727',
        red: '#e24848',
        grey: '#dae5e8',
        green: '#008f64',
        sky: '#7dcdfa',
        blue: '#0047ff',
        purple: '#dbacff',
        violet: '#620fcb',
        yellow: '#d9ae02',
      },
    },
  },
  plugins: [],
};
