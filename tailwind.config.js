/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F1B2D',
        accent: '#2D7DD2',
        surface: '#F8F7F4',
      },
      fontFamily: {
        sans: ['"DM Sans"', '"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
