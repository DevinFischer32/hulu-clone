module.exports = {
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
