/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'darkblue': '#1f3c40',
        'lighterblue': '#004b79',
        'hoverblue': '#4078c0',
        'background': '#f2eede',
      },
      fontFamily: {
        'mono': 'JetBrains Mono',
        'customserif': 'Noto Serif JP',
      },
    },
  },
  plugins: [],
}
