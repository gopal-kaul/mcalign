/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      lime: "#B3FA06",
      green: "#5FB591",
      pink: "#A504FE",
      purple: "#5650EC",
      cyan: "#01A2D7",
      darkblue: "#13124C",
      redpink: "#F15486",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        "gt-america": ["GT America"],
        aeonik: ["Aeonik"],
      },
    },
  },
  plugins: [],
};
