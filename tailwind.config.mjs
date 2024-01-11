/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "479px",
        md: "767px",
        lg: "991px",
      },
      colors: {
        grey: "#333333",
        merino: "#faf7f0",
        red: "#e1000e",
      },
      padding: {
        "5vh": "5vh",
        "5vw": "5vw",
        "10vh": "10vh",
        "10vw": "10vw",
      },
      keyframes: {
        slidein: {
          // Remove 20% if delay not needed
          "0%, 20%": { opacity: "0", transform: "translateY(150px)" },
          "100%": { opacity: "1" },
        },
      },
      fontFamily: {
        heading: ["Almarai", "sans-serif"],
        subheading: ['"Archivo Narrow"', "sans-serif"],
        body: ["Archivo", "sans-serif"],
      },
    },
    letterSpacing: {
      wide: "3px",
    },
  },

  plugins: [],
};
