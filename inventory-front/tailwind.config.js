/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A3C356',
        primary_dark: '#6CB44C',
        primary_darker: '#24842C',
        secondary: '#A8AFA6',
        secondary_dark: '#647B64',
        secondary_darker: '#443C3C',
        secondary_lighter: '#dbdbdbff',
        background: '#e6f0cdff',
      }
    },
  },
  plugins: [],
};