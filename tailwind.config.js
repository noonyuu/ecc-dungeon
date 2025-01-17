/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: '16px',
      },
      backgroundColor: {
        black: '#202020',
        'light-gray': '#EDEDED',
        main: '#323232',
      },
      lineHeight: {
        12: '3rem',
      },
    },
  },
  plugins: [],
};
