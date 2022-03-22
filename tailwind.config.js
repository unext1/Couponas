module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0EB56F",
          purple: "#6333ff",
          gray: {
            lighter: "#778CAC",
            darker: "#3E4859",
          },
          dark: {
            900: "#111",
            800: "#161616",
            700: "#171717",
            600: "#191919",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
