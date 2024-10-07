tailwind.config = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('../assets/heroBackground.jpg')",
        "price-background": "url('../assets/priceBackground.jpg')",
        "barbeiro-card1": "url('../assets/Barbeiro1.png')",
        "barbeiro-card2": "url('../assets/Barbeiro2.png')",
        "barbeiro-card3": "url('../assets/Barbeiro3.png')",
      },

      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        NotoSans: ["Noto+Sans", "sans-serif"],
        Playfair: ["Playfair Display", "sans-serif"],
      },

      colors: {
        primary: "#181818",
        "primary-light": "#242322",
        secondary: "#FBB034",
        "secondary-light": "#D5A353",
        white: "#fcfcfc",
      },
    },

    letterSpacing: {
      widest: ".85rem",
      wider: ".3rem",
    },
  },
  plugins: [],
};
