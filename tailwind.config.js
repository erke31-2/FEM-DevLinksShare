/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#373737",
        secondaryColor: "#505050",
        btnBg: "#633bfe",
        cardBg: "#fafafa",
        inputBorder: "#e2e2e2",
        navBg: "#efecff",
      },
      screens: {
        'wide': { 'raw': '(min-width: 1100px)' },
      },
      dropShadow: {
        "inputShadow" : '0px 0px 5px #633bfe'
      }
    },
  },
  plugins: [],
};
