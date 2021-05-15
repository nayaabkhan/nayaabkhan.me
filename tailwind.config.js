const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    layers: [],
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'

  theme: {
    spacing: {
      0: '0',
      1: '0.125rem',
      2: '0.25rem',
      3: '0.5rem',
      4: '1rem',
      5: '2rem',
      6: '4rem',
      7: '8rem',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'white',
      primary: {
        100: 'hsl(231 20% 97%)',
        200: 'hsl(231 30% 80%)',
        300: 'hsl(231 40% 70%)',
        400: 'hsl(231 50% 60%)',
        500: 'hsl(231 60% 50%)',
        600: 'hsl(231 64% 40%)',
        700: 'hsl(231 64% 30%)',
        800: 'hsl(231 64% 20%)',
        900: 'hsl(231 64% 10%)',
      },
      accent: {
        100: 'hsl(330 90% 95%)',
        200: 'hsl(330 90% 80%)',
        300: 'hsl(330 90% 70%)',
        400: 'hsl(330 90% 60%)',
        500: 'hsl(330 90% 50%)',
        600: 'hsl(330 90% 40%)',
        700: 'hsl(330 90% 30%)',
        800: 'hsl(330 90% 20%)',
        900: 'hsl(330 90% 10%)',
      },
      gray: colors.gray,
    },

    fontFamily: {
      sans: ['Satoshi', '-apple-system', 'Roboto', 'Fira Sans', 'sans-serif'],
      em: ['Kalam', 'cursive'],
      script: ['"La Belle Aurore"', 'cursive'],
      mono: ['"DM Mono"', 'monospace'],
    },

    extend: {
      boxShadow: {
        hard: '0 3px 2px -1px hsla(231, 64%, 50%, 30%)',
      },
      gridTemplateColumns: {
        'repeat-auto-fill': 'repeat(auto-fill, minmax(220px, 1fr))',
      },
    },
  },

  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
}
