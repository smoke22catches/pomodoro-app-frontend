/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      chocolate: "#730719",
      "red-900": "#B61631",
      "red-700": "#D90429",
      red: "#EF233C",
      white: "#EDF2F4",
      gray: "#8D99AE",
      black: "#2B2D42",
    },
  },
  plugins: [],
};
