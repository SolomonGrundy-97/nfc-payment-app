/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nfcWhite: '#FFFFFF',
        nfcLightBlack: '#212120',
        nfcMidBlue: '#7FACEA',
        nfcBlue: '#448DFE',
        nfcPurple: '#B6B0F4',
        nfcBlackBG: '#000000',
        nfcGreen:'#34A853',
        nfcThickBlack: '#121212',
        nfcDeemGray: '#999999',
        nfcRed: '#B42318',
        nfcMilkGray: '#BCB9B9',
        linearGradient_1: '#000000',
        linearGradient_2: '#444444',
    },
  },
  plugins: [],
}
}