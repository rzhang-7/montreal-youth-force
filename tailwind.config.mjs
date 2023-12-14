/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      // subject to change
      sm: "479px",
      md: "991px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        black: "#000000",
        grey: "#333333",
        merino: "#faf7f0",
        red: "#e1000e"
      },
      padding: {
        '5vh' : '5vh',
        '5vw' : '5vw',
        '10vh' : '10vh',
        '10vw' : '10vw',
      }
    },
    fontFamily: {
      heading: ['"Six Caps"', "sans-serif"],
      subheading: ['"Archivo Narrow"', "sans-serif"],
      body: ["Archivo", "sans-serif"],
    },
    letterSpacing: {
      wide: '3px'
    }
  },

  plugins: [],
};
