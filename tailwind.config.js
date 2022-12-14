/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["'Noto Serif Display'"],
        manrope: ["'Manrope'"],
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/image/hero-image.webp')",
        "home-image": "url('/src/assets/image/home-image.webp')",
      },
      colors: {
        "dark-brown": "#3F362F",
        "white-bone": "#E6E1DC",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
