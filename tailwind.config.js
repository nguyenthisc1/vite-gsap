/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Area Normal', 'Arial', 'sans-serif'"],
        secondary: ["'F37 Judge', 'Arial', 'sans-serif'"],
        third: ["'Font Awesome 6 Brands', 'Arial', 'sans-serif'"],
    },
    colors: {
      primary: '#396dff',
      secondary: '#f9e0e3',
      blue: '#00185c',
      grey: '#f1f5ff',
      green: '#bfffda'
  },
    container: {
      center: true,
  },
    },
  },
  plugins: [
  ],
}

