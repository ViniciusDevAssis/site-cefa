/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        'bluecefa': '#1C293B',
        'redcefa': '#d11b27',
        'ciancefa': '#32cbfa'
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
        'roboto': ['roboto', 'sans-serif']
      }
    }
  },
  plugins: [],
}

