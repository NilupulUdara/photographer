/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoslab: ['"Roboto Slab"', 'serif'],
        greyQo: ['"Grey Qo"', 'sans-serif'],
      },
      colors: {
        dark: '#1a1a1a',
    },
  },
  plugins: [],
},
}