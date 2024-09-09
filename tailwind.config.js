/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('../assets/heroBackground.jpg')",
        "price-background": "url('../assets/priceBackground.jpg')",
      },

      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        NotoSans: ["Noto+Sans", "sans-serif"],
      },

      colors: {
        primary: "#181818",
        "primary-light": "#242322",
        secondary: "#FBB034",
        "secondary-light": "#D5A353",
        white: "#fcfcfc",
      },
    },
  },
  plugins: [],
};
