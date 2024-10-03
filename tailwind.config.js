/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vdark: "#000000",
        dark: "#0B192C",
        light: "#1E3E62",
        myorange: {
          100: "#ff9047",
          200: "#FF6500",
        },
      },
    },
  },
  plugins: [],
};
