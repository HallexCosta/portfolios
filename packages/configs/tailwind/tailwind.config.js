/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/node_modules"
  ],
  theme: {
    extend: {
      colors: {
        "back-default": "#0F1624",
      },
      maxWidth: {
        desktopLarge: "1670px",
        desktop: "1260px",
        laptop: "1024px",
      },
      screens: {
        mobile: "600px",
        // => @media (min-width: 640px) { ... }

        tablet: "768px",
        // => @media (min-width: 768px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1200px",
        // => @media (min-width: 1280px) { ... }

        desktopLarge: "1690px",
        // => @media (min-width: 1536px) { ... }
      },
      animation: {
        cursor: "cursor .6s linear infinite alternate",
        typing: "type 1.8s ease-out .8s 1 normal both",
        "type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
      },
      keyframes: {
        cursor: {
          "50%": {
            borderColor: "transparent",
          },
        },
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
