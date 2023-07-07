/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'grape-purple': '#5C1349',
    },
    fontFamily: {
      Raleway: ['Raleway', 'sans-serif', 'Lato', 'Poppins'],
    },
  },
  plugins: [],
};
