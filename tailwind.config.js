/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      'mb': '320px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
