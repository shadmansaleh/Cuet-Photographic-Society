import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "selector", // or 'media' or 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [{ pattern: /grid-cols-\d+/ }],
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
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        "cuetps-light": {
          ...require("daisyui/src/theming/themes")["light"],
          // primary: "#384D6C",
          // "primary-content": "white",
          // secondary: "#A3C0E9",
          // "secondary-content": "black",
          // accent: "#1A83E4",
          // "accent-content": "white",
          // "base-100": "#DFEAFE",
          // "base-200": "#B6C8EA",
          // "base-300": "#95ACD7",
          // "base-content": "black",
          // neutral: "#ff9d66",
          // "neutral-content": "black",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "1.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "2px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
      {
        "cuetps-dark": {
          ...require("daisyui/src/theming/themes")["dark"],
          // primary: "oklch(65.69% 0.196 275.75)",
          // secondary: "oklch(42.88% 0.076 282.55)",
          // accent: "oklch(74.51% 0.167 183.61)",
          // neutral: "#2a323c",
          // "neutral-content": "#A6ADBB",

          // // "base-100": "#1d232a",
          // "base-100": "#242930",
          // "base-200": "#191e24",
          // "base-300": "#15191e",
          // "base-content": "#A6ADBB",

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "1.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "2px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
};
