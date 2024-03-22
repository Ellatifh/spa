/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#222222',
      warning: "#FFE68E",
      dark: "#303548",
      primary: "#EC6C5A",
      secondary: "#FFF6F1",
      gray: "#F2F2F2",
      lightpink: "#EBE0E0"
    },
    fontFamily: {
      sans: ['Italiana', 'sans-serif']
    },
  },
  plugins: [],
}

