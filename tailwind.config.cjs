const dt = require('tailwindcss/defaultTheme')

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...dt.fontFamily.sans]
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
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark']
  }
}

module.exports = config
