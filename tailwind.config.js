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
        backgroundcolor: "linear-gradient(to bottom right, rgba(255,255,255) 0%, rgba(	82, 109, 130) 30%)",
        topmenubarbgcolor:"linear-gradient(to right, rgba(26,26,25) 0%, rgba(49,81,30) 80% )",
        cardbgcolor:"linear-gradient(to left,rgba(60,42,33) 0%, rgba(213,206,163) 100%)",
      },
    },
  },
  plugins: [],
};
