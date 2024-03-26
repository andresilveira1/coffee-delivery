/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        alt: ['Baloo', 'sans-serif'],
      },
      colors: {
        base: {
          50: '#F3F2F2',
          100: '#EDEDED',
          200: '#E6E5E5',
          250: '#D7D5D5',
          300: '#8D8686',
          500: '#574F4D',
          700: '#403937',
          800: '#272221',
        },
        yellow: {
          150: '#F1E9C9',
          550: '#DBAC2C',
          650: '#C47F17',
        },
        violet: {
          150: '#EBE5F9',
          650: '#8047F8',
          930: '#4B2995',
        },
      },
    },
  },
  plugins: [],
}
