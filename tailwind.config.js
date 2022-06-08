module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(-16px)",
          },
          "50%": {
            transform: "translateY(8px)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
      colors: {
        body: "#ffffff",
        "selected-text": "#000000",
        primary: "#2CB9EA",
        accent: "#f5f5f5",
        textblack: "#121212",
        "input-border": "#2Cb9EA",
      },
      fontFamily: {
        header: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        h1: "3.052rem",
        h2: "2.441rem",
        h3: "1.953rem",
        h4: "1.563rem",
        pl: "1.25rem",
        pr: "1rem",
        ps: "0.8rem",
      },
      backgroundImage: {
        "hero-bg": "url('/Herobg.png')",
      },
    },
  },
  variants: {},
  plugins: [],
};
