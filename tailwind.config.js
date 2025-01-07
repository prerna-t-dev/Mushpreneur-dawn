module.exports = {
  content: [
    './**/*.liquid', // All Liquid files in the theme
    './assets/*.js', // All JS files (if you add any JS in your theme)
  ],
  theme: {
    fontFamily: {
      'primary': ['Figtree', 'sans-serif'],
    },
    extend: {
      colors: {
        pink: '#FF3EAD',
        orange: '#E45825',
        lightorange: '#FEA30C',
        yellow: '#FFC107',
        skyblue: '#98E1FF'
      }
    },
  },
  plugins: [],
};
