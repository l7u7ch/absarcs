const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './layouts/*.html',
    './layouts/_default/*.html',
    './layouts/_default/_markup/*.html',
    './layouts/partials/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: colors.coolGray,
      red: colors.red,
      blue: colors.blue,
    },
    extend: {
      colors: {
        'default': { DEFAULT: '#6b7280' },
        'primary': { DEFAULT: '#b91c1c' },
        'secondary': { DEFAULT: '#24292e' },
        'amazon': { DEFAULT: '#ff9900' },
        'envelope': { DEFAULT: '#16a085' },
        'facebook': { DEFAULT: '#3b5998' },
        'github': { DEFAULT: '#24292e' },
        'hatena': { DEFAULT: '#00a4de' },
        'pocket': { DEFAULT: '#ee4056' },
        'rakuten': { DEFAULT: '#bf0000' },
        'rss': { DEFAULT: '#e0812a' },
        'twitter': { DEFAULT: '#1da1f2' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


