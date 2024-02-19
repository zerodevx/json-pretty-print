const { addDynamicIconSelectors } = require('@iconify/tailwind')
const dt = require('tailwindcss/defaultTheme')

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
  ]
}

module.exports = config

//primary: '#1C75BC',
