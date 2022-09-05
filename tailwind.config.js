/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
        work: ['Work Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'fira-sans': ['Fira Sans', 'sans-serif'],
        'fira-sans-condensed': ['Fira Sans Condensed', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'dm-serif-display': ['DM Serif Display', 'serif'],
        'dm-mono': ['DM Mono', 'monospace'],
        'play-fair': ['Playfair Display', 'serif'],
        mons: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        // Primary
        'primary-20': '#14ffb0',
        'primary-40': '#00ffa9',
        'primary-60': '#00eb9c',
        'primary-80': '#00d88f',
        'primary-100': '#00c482',
        'primary-200': '#00b075',
        'primary-300': '#009d68',
        'primary-400': '#00895b',
        'primary-500': '#00764e',
        primary: '#006241',
        'primary-600': '#004e34',
        'primary-700': '#003b27',
        'primary-800': '#00271a',
        'primary-900': '#00140d',

        // Secondary
        secondary: '#1e3932',

        // Accent
        accent: '#d4e9e2',
      },

      maxWidth: {
        '8xl': '90rem',
      },

      screens: {
        '3xl': '1701px',
        // => @media (min-width: 1701px) { ... }
      },
    },
  },
  plugins: [],
};
