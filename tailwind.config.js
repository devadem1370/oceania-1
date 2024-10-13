/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:"#68B1C8",
        black:"#000408",
        gray:"#262C31",
        silver:"#838D9B",
        lightSilver:'#D9D9D9 ',
        white:"#ffffff"


      },
      fontFamily:{
        manrope: ['Manrope', 'sans-serif'],
        garamond:[ "Cormorant Garamond", 'serif']
      }
    },
  },
  plugins: [],
}