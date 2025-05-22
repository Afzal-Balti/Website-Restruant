/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        exo: ['"Exo 2"', "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        boldonse: ["Boldonse", "sans-serif"], // Only works if 'Boldonse' is valid and loaded
      },
    },
  },
  plugins: [],
};
