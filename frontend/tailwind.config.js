/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xl': '1300px',
      'md': '1024px' 
    },
    extend: {
      margin: {
        '27px': '27px',
      },
      colors:{
        'mainColor': '#161A41',
        'minorColor': '#3D5AFE',
        'gradientColor': 'background: linear-gradient(100.71deg, rgba(27, 204, 226, 0.6) -1.17%, rgba(34, 215, 167, 0.6) 88.41%);'
      },

      rotate: {
        '360': '360deg',
      },
    },
  },
  plugins: [],
}

