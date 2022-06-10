module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1925px",
        "2xl": "1536px",
        xl: "1400px",
        lg: "1020px",
        md: "760px",
        sm: "320px",
      },
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
            transform: "translateY(-10px)",
          },
          "50%": {
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0.75",
            transform: "translateY(28px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(28px)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-28px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(-28px)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "fade-in-down": "fade-in-down 0.7s ease-out",
        "fade-out-down": "fade-out-down 0.7s ease-out",
        "fade-in-up": "fade-in-up 0.7s ease-out",
        "fade-out-up": "fade-out-up 0.7s ease-out",
      },
      colors: {
        body: "#ffffff",
        "selected-text": "#000000",
        primary: "#2CB9EA",
        accent: "#f5f5f5",
        textblack: "#0E1111",
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
