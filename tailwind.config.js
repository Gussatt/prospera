/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'header': '#fafafa',
      'black': '#090909',
      'blue': '#23537D',
      'midnight': '#02213D',
      'green': '#926E35',
    },
    extend: {
      fontSize: {
        'clamp-label' : 'clamp(.8rem, 1.4vw, 2rem)',
        'clamp-text' : 'clamp(1.3rem, 1.7vw, 2rem)',
        'clamp-title': 'clamp(2rem, 3.5vw, 3rem)',
        'img-width': 'clamp(15rem, 15vw, 20rem)',
      },
      backgroundImage:{
        'neural-bg' : "url('/public/assets/neural-background.jpeg')"
      },
    },
  },
  plugins: [],
}
