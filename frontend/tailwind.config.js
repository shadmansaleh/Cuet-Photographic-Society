import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "selector", // or 'media' or 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ["Lora", "serif"],
      sans: ["Poppins", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      playfair_display: ["Playfair Display", "serif"],
      lora: ["Lora", "serif"],
    },
    extend: {},
  },
  plugins: [ daisyui ],
}

