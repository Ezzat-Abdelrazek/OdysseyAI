/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      screen: {
        xs: "480px",
      },
      keyframes: {
        spinCenteredAbsolute: {
          from: {
            transform: "translate(-50%,-50%) rotate(0deg)",
          },
          to: {
            transform: "translate(-50%,-50%) rotate(360deg)",
          },
        },
      },
      fontFamily: ["Inter", "sans-serif"],
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "spin-centered-absolute": "spinCenteredAbsolute 1s linear infinite",
      },
      backgroundImage: {
        doodle: "url('/src/assets/doodle.jpg')",
      },
    },
  },
  plugins: [],
};
