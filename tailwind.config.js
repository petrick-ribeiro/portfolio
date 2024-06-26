/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#2C2C2C",
      blue: "#A4BDC2",
      base: "#FDFEF6",
      peach: "#FFECDC",
      rose: "#E6DDDE",
      subtext: "#7c7f93",
      white: "#FFFFFF",
    },
    fontFamily: {
      playwrite: ["Playwrite BR", "cursive"],
      roboto: ["Roboto Condensed"],
      "roboto-serif": ["Roboto Serif", "sans-serif"],
    },
  },
  plugins: [],
};
