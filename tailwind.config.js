/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bluecefa': '#1C293B',
        'redcefa': '#d11b27'
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
        'roboto': ['roboto', 'sans-serif']
      }
    }
  },
  plugins: [],
}

