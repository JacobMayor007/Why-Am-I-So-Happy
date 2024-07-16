/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        navbar: ["Noto Serif Display"],
        parag: ["Martel Sans", "sans-serif"],
        para: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
