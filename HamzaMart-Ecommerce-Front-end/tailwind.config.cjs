/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1150px",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        orange: "#FF9900",
        blackHov: "#4e4e4c",
        lightBorder: "#999999",
        ashText:"#9e9e9e",
      },
    },
  },
  plugins: [],
};
