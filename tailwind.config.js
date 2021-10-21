module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: '#ffb11a',
        DEFAULT: '#ffb11a',
        dark: '#ffb11a',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
