
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'pickle': "#597D35",
        'pickle-lg': '#73a145',
        'dm':'#2D2E2E',
        
      }
  },
  plugins: [],
  }
}

