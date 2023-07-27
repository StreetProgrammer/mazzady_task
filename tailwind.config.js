/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        tajawal: ['Tajawal'],
      },
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray_1: '#00000017',
      gray_2: '#00000029',
      gray_3: '#CCCCCC',
      gray_4: '#FEFEFE',
      gray_5: '#E3E3E3',
      gray_6: '#F3F3F3',

      dark_gray_1: '#414141',
      dark_gray_2: '#808080',
      dark_gray_3: '#707070',
      dark_gray_4: '#1D1D1D',
      dark_gray_5: '#323232',

      pinkish_red: '#D20653',
      magenta_red: '#9B0257',

      pinkish_purple: '#44215D',

      orange_yellow: '#FDBC01',
      orange_yellow_2: '#FDBA03',
      orange_yellow_3: '#FFC200',
      orange_yellow_4: '#FFBC06',
      orange_yellow_5: '#FFAE18',

      orange: '#FF951D',
      orange_2: '#FF9736',
      orange_3: '#FF953A',
    },
  },
  plugins: [],
};
