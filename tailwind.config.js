/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{pages,components}/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tangie: {
          orange: {
            500: "#FF4D00",
          },
          mint: {
            500: "#13EAA8",
          },
          blurple: {
            500: "#5765F2",
          },
        },
      },
      fontFamily: {
        display: ["Erica One", "cursive"],
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
