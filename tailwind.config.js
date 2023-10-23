/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      teal: "#026893", //teal
        "teal-secondary": "#026893",
        "blue-highlight": "#0cb5fc",
        white: "#F8F9F9",
        black: "#22252B",
      },
    },
  },
  plugins: [],
};
