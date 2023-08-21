/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["'SVN-Mabry Pro', 'Arial', 'sans-serif'"],
        secondary: ["'SVN-Grand Slang', 'Arial', 'sans-serif'"],
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

