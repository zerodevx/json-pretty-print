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
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#0284c7',
          secondary: '#059669',
          accent: '#d97706',
          neutral: '#525252'
        }
      },
      'dark'
    ]
  }
}

module.exports = config
