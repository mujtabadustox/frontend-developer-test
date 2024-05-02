/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "SFP-R": ["SF Pro Text Regular", "sans-serif"],
        "SFP-M": ["SF Pro Text Medium", "sans-serif"],
      },
      colors: {
        "background": "#000000",
        "sidebar": "#292A31",
        "gray-3": "#18191D",
        "success": "#0AC18E",
      },
    },
  },
  plugins: [],
};
