/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        backgroundcolor: "linear-gradient(to right, rgba(49,81,30) 0%, rgba(26,26,25) 30%)",
        topmenubarbgcolor:"linear-gradient(to right, rgba(26,26,25) 0%, rgba(49,81,30) 80% )",
      },
    },
  },
  plugins: [],
};
