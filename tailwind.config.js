/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: '#003F62',
        mainYellow: '#EDA415',
        grayText: '#3A3A3A',
        grayLigth: '#BDBDBD',
        iconColor: '#292D32',
      }
    },

  },
  plugins: [],
}

