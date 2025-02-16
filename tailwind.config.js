/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#0BABCE",
        "gray-light": "#DEDEDE",
        gray: "#58585A",
        "blue-light": "#0898B8",
      },
    },
    fontFamily: {
      custom: ["ZonaPro", "sans-serif"],
      sans:['Open Sans']
    },
  },
  plugins: [],
};
