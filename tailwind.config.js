/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      colors:{
        buttoncolor: "#ef8900",
        cardcolor:"#553939",
      },
      backgroundImage: {
        backgroundcolor: "linear-gradient(to right, rgba(49,81,30) 0%, rgba(26,26,25) 30%)",
        topmenubarbgcolor:"linear-gradient(to right, rgba(26,26,25) 0%, rgba(49,81,30) 80% )",
        cardbgcolor:"linear-gradient(to left,rgbaa(167,121,121) 0%, rgba(85,57,57) 30%)",
      },
    },
  },
  plugins: [],
};
