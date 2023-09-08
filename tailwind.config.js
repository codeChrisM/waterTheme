/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: "#0E7C7B", //teal
        "teal-secondary": "#17BEBB",
        "blue-highlight": "#17BEBB",
        white: "#F8F9F9",
        black: "#22252B",
      },
    },
  },
  plugins: [],
};
