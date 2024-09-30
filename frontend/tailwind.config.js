/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#000022",
        darkred: "#DB504A",
        offwhite: "#F2FBE0",
        palegreen: "#537958",
        yellow: "#fc9d03",
      },
    },
  },
  plugins: [],
};
