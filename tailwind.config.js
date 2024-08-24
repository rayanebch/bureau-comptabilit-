/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat:['Montserrat'],
      },
      backgroundImage:{
        'bg1': "url('src/assets/images/background.png')",
      },
    },
  },
  plugins: [],
}