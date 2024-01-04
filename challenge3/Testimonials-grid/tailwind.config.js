/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        moderateViolet: 'hsl(263, 55%, 52%)',
        veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
        veryDarkBlackishBlue: 'hsl(219, 29%, 14%)',
        lightGray: 'hsl(0, 0%, 81%)',
        lightGrayishBlue: 'hsl(210, 46%, 95%)',
      },
      fontFamily: {
        body: ['Barlow Semi Condensed'],
      },
    },
  },
  plugins: [],
};
