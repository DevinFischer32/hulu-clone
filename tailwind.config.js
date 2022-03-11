module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    require("tailwind-scrollbar-hide"),
  ],
};
