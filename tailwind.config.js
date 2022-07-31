/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'darkblue': '#1f3c40',
        'lighterblue': '#004b79',
        'borderwhite': '#ddf3ff',
        'hoverblue': '#4078c0',
      },
      backgroundImage: {
        'snow': "url('background.jpg')",
      }
    },
  },
  plugins: [],
}
