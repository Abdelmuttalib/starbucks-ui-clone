/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
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
        primary: '#006241',
      },
    },
  },
  plugins: [],
};
