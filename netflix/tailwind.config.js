/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all JS, JSX, TS, and TSX files in `src`
    "./public/index.html", // Ensures Tailwind scans the main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
