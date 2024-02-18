/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['DM Sans', 'Manrope', 'sans-serif'],
        accent: ['Rock Salt', 'Reenie Beanie', 'cursive'],
      },
    },
  },
  plugins: [],
};
