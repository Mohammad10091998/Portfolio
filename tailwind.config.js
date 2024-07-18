/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customLightGray: '#f2f2f2', 
        customDarkGray: '#1c1d20', 
        customLittleDarkGray: '#2c2d30', 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #2C3E50 0%, #4CA1AF 100%)',
      },
      keyframes: {
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate360: "rotate360 0.5s linear",
      },
    },
  },
  plugins: [],
};
