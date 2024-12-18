/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/*.{html,js}", "./js/*.{html,js}", "./*.{html,js}"],
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
        "white-dark": "#DCDCDC ",
      },
    },

    letterSpacing: {
      widest: ".85rem",
      wider: ".1rem",
    },
  },
  plugins: [],
};
