/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-40px)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-60px)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-80px)" },
        },
      },
      animation: {
        floatSlow: "floatSlow 12s ease-in-out infinite",
        floatMedium: "floatMedium 10s ease-in-out infinite",
        floatFast: "floatFast 8s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["WF Visual Sans Variable", "Arial", "sans-serif"],
        heading: ["Inter", "sans-serif"],
        body: ["Inconsolata", "monospace"],
        poppins: ["Poppins, sans-serif"]
      },
    },
  },
  plugins: [],
};
