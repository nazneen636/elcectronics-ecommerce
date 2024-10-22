/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary_bgColor: "#020202",
        primary_textColor: "#000000",
        gray_textTwo: "#8C8C8C",
        gray_text: "#A2A6B0",
        green: "#78A962",
        blue: "#0156FF",
        light_BgShade: "#F5F7FF",
        yellow: "#E9A426",
        primary_red: "#C94D3F",
        red: "#DB0000",
        lineColor: "#CACDD8",
      },
    },
  },
  plugins: [],
};
// font-family: "Poppins", sans-serif;
