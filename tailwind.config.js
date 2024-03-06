/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "28px": "28px",
      },
      width: {
        402: "25.125rem",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
