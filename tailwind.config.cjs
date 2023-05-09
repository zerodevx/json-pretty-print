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
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#1C75BC'
        }
      },
      'dark'
    ]
  }
}

module.exports = config
