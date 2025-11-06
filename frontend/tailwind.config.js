/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',  // bright blue
        accent: '#22D3EE',   // cyan
        surface: '#0B1120',  // deeper dark background
      },
    },
  },
  plugins: [],
};
