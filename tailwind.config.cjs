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
        statBg: "#3A3636",
        cyann: "#00D2FF",
      },
      fontSize: {
        md: "18px",
        h1: "56px",
        h2: "40px",
      },
      backgroundSize: {
        530: "530px",
      },
    },
  },
  plugins: [],
};
