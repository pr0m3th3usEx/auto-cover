/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'red-hat': ['Red hat Display', 'sans-serif'],
      },
      colors: {
        lotion: '#FCFCFC',
        keppel: '#37AC9C',
        'smoky-black': '#0F0F0F',
        'smoky-black-transparent': 'rgba(15, 15, 15, 0.00)',
        'yankees-blue': '#232D3F',
        'castleton-green': '#005B41',
        'pine-green': '#008170',
        'dark-green': '#004A35',
        'pewter-blue': '#7FC0B7',
        'pewter-blue-alpha': 'rgba(127, 192, 183, 0.50)',
        'tiffany-blue': '#BF1229',
        'pastel-blue-alpha': 'rgba(168, 206, 201, 0.29)',
      },
      fontSize: {
        xs: '0.75rem' /* 12px */,
        sm: '0.875rem' /* 14px */,
        base: '1rem' /* 16px */,
        lg: '1.125rem' /* 18px */,
        xl: '1.25rem' /* 20px */,
        '2xl': '1.5rem' /* 24px */,
        '3xl': '1.875rem' /* 30px */,
        '4xl': '2.25rem' /* 36px */,
        '5xl': '3rem' /* 48px */,
        '6xl': '4rem' /* 60px */,
        'landing-title': '64px',
        title: '24px',
        'sub-title': '18px',
        body: '14px',
        details: '12px',
      },
      gradientColorStopPositions: {
        0.45: '-0.45%',
        101.58: '101.58%',
      },
    },
  },
  plugins: [],
};
