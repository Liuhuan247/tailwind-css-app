module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          450: '#ffb11a',
        },
        primary: '#f4a203',
        'primary-light': 'rgba(244,162,3,0.8)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
