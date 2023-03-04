/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors: {
      red: {
        light: '#F26D6D',
        medium: "#F24141",
        dark: '#F20505',
      },
      yellow: {
        light: '#F2D027',
        dark: '#F2E30F',
      },
      white: "#fff",
      black: "#000",
      chumbo: "#1D1D1D"
    },
  
    extend: {},
  },
  plugins: [],
};
