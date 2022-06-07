module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#ffffff",
        "selected-text": "#000000",
        primary: "#2CB9EA",
        accent: "#f5f5f5",
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
        ps: "1rem",
      },
      backgroundImage: {
        "hero-bg": "url('/Herobg.png')",
      },
    },
  },
};
