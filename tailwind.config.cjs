const { addDynamicIconSelectors } = require('@iconify/tailwind')
const dt = require('tailwindcss/defaultTheme')
const themes = require('daisyui/src/theming/themes')

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...dt.fontFamily.sans]
      }
    }
  },
  plugins: [
    addDynamicIconSelectors({ scale: 0 }),
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...themes['light'],
          primary: '#1C75BC'
        },
        dark: {
          ...themes['dark'],
          primary: '#8DC3EE'
        }
      }
    ]
  }
}

module.exports = config
