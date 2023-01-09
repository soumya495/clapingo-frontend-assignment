/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#139980",
        text1: "#001F27",
        text2: "#060606",
        cta: "#FF736A",
      },
      fontSize: {
        md: "18px",
        h1: "56px",
      },
    },
  },
  plugins: [],
};
