const dt = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.svelte',
    './public/**/*.html'
  ],
  darkMode: false,
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
  },
  variants: {
    extend: {}
  }
}
