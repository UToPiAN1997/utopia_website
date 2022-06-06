module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'body': '#ffffff',
        'selected-text': '#000000',
        'primary': '#2CB9EA',
        'accent': '#f5f5f5',
        'input-border': '#2Cb9EA'
      },
      fontFamily: {
        'montserrat': ["Montserrat", 'sans-serif']
      },
      backgroundImage: {
        'hero-bg': "url('/Herobg.png')",
      }
    },
  },
}
