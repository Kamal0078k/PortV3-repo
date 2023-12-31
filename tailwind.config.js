/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['"Archivo Black"', ...defaultTheme.fontFamily.sans],
        pops: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        monster: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        dm: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        pale: "#EDE8E2",
      },
    },
  },
  plugins: [],
};
