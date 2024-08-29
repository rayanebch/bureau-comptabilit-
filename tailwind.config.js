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
        'bg2': "url('src/assets/images/bg2.jpg')",
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 0.5s ease-out forwards',
        fadeInRight: 'fadeInRight 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
