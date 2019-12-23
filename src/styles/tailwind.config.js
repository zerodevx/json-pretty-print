const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    /*extend: {
      fontFamily: {
        body: [
          'Roboto',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },*/
    screens: {
      'md': '768px',
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: []
}
