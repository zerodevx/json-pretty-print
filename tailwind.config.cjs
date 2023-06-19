const dt = require('tailwindcss/defaultTheme')

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...dt.fontFamily.sans]
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
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#1C75BC',
          'primary-content': 'white'
        }
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#1C75BC'
        }
      }
    ]
  }
}

module.exports = config
