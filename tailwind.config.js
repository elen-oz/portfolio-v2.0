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
        // green: '#036f42',
        sky: '#7dcdfa',
        blue: '#086a93',
        purple: '#dbacff',
        violet: '#714ca2',
        yellow: '#f8bc4b',
        rose: '#ffbaba',
      },
      backgroundImage: {
        maskRose: "url('/mask-rose.svg')",
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
