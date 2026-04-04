/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        steel: "#10243a",
        mist: "#d7e2f2",
        sand: "#d3b58f",
        ember: "#a86f4c",
        cloud: "#f6f0e8",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(7, 16, 31, 0.28)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
