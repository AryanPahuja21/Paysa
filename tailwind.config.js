/** @type {import('tailwindcss').Config} */
module.exports ={
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements-react/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        'Logo': ['Sixtyfour', 'sans-serif'],
        'Dashboard': ['Protest Strike','sans-serif'],
        'Heading': ['Cute Font','sans-serif']

      }
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};

