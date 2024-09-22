/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#000022",
        darkred: "#92140C",
        offwhite: "#FFF8F0",
        teal: "#3C787E",
        yellow: "#FCA311",
      },
    },
  },
  plugins: [],
};

