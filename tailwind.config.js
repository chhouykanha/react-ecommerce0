/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"]
      },
      colors: {
        primary: "#171717",
        secondary: "#f6e6cf"
      }
    },
  },
  plugins: [],
}