const dt = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.svelte', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...dt.fontFamily.sans]
      },
      fontSize: {
        '2xs': '0.625rem'
      }
    },
    screens: {
      md: '768px'
    },
    container: {
      center: true
    }
  }
}
