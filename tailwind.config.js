/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d72d2",
      },
      screens:{
'maxs':"600px"
      },
      fontFamily:{
        'sans':['Inter','serif']
      },
    },
  },
  plugins: [],
};
