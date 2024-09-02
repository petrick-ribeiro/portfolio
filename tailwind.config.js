/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      base: "#FDFEF6",
      black: "#2C2C2C",
      blue: "#73BDA8",
      brown: "#4C2215",
      peach: "#FFECDC",
      red: "#CC6B49",
      rose: "#E6DDDE",
      subtext: "#7c7f93",
      white: "#FFFFFF",
      yellow: "#D2A24C",
    },
    fontFamily: {
      playwrite: ["Playwrite BR", "cursive"],
      roboto: ["Roboto Condensed"],
      "roboto-serif": ["Roboto Serif", "sans-serif"],
    },
  },
  plugins: [],
};
