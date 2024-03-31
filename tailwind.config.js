/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        alt: ['"Baloo 2"', 'sans-serif'],
      },
      gridTemplateColumns: {
        checkout: 'repeat(1, minmax(0, 40rem) minmax(0, 1fr))',
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
      keyframes: {
        fadeUp: {
          from: {
            opacity: 0,
            transform: 'translate3d(0, 2rem, 0)',
          },
          to: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1500ms ease both',
      },
    },
  },
  plugins: [],
}
