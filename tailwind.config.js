const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    layers: [],
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
      '**/*.mdx',
    ],
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
        100: 'hsl(231 64% 97%)',
        200: 'hsl(231 64% 92%)',
        300: 'hsl(231 64% 70%)',
        400: 'hsl(231 64% 60%)',
        500: 'hsl(231 64% 50%)',
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
      sans: ['Inter', '-apple-system', 'Roboto', 'Fira Sans', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      em: ['Kalam', 'cursive'],
      script: ['"La Belle Aurore"', 'cursive'],
      mono: ['"DM Mono"', 'monospace'],
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
