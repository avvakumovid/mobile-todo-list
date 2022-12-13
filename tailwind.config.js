const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      blue: {
        DEFAULT: '#0e1f54',
        200: '#096bff',
      },
      black: '#1b2b59',
      white: {
        DEFAULT: colors.white,
        200: '#f8fafe',
      },
      transparent: colors.transparent,
      pink: '#bc2ac8',
      gray: {
        DEFAULT: '#cbd7fb',
        200: '#7e89af',
      },
      red: colors.red['500'],
    },
    extend: {
      zIndex: {
        1: '1',
      },
      width: {
        22: '5.5rem',
      },
      height: {
        22: '5.5rem',
      },
    },
  },
  plugins: [],
}
