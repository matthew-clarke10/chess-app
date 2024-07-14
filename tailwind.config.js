/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        background: {
          light: "#F0ECEC",
          dark: "#181414",
        },
        text: {
          light: "#4D4D4D",
          dark: "#BABABA",
        },
      },
      height: {
        nav: "6rem",
        main: "calc(100vh - 6rem)",
      },
      flex: {
        '2': '2 2 0%'
      },
    },
  },
  plugins: [],
}