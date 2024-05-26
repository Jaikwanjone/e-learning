/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: {
        1: "#fff",
        2: "#FCFCFD",
        3: "#F7F7F8",
        4: "#F1F1F3",
        5: "#E4E4E7",
      },
      black: "#000",
      orange: {
        1: "#FFFDFA",
        2: "#FFF9F0",
        3: "#FFF4E5",
        4: "#FFEACC",
        5: "#FFD499",
        6: "#FFCA80",
        7: "#FFBF66",
        8: "#FF9500",
      },
      grey: {
        1: "#B3B3B3",
        2: "#98989A",
        3: "#656567",
        4: "#59595A",
        5: "#4C4C4D",
        6: "#333333",
        7: "#262626",
        8: "#191919",
      },
    },
    fontFamily: {},
    // bevi: ["Be Vietnam Pro"],
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      iPad: "768px",
      // => @media (main-width: 768px)

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      monitor: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      padding: {
        DEFAULT: "1rem",

        laptop: "2rem",
        desktop: "4rem",
        monitor: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
