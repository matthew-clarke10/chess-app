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
        secondary: {
          light: "#FFFFFF",
          dark: "#3D3935",
        },
        text: {
          light: "#4D4D4D",
          dark: "#BABABA",
        },
        hint: "#FFAA00",
        green: {
          light: "#8EDB35",
          dark: "#629923",
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