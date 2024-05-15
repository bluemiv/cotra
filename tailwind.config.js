export const toTailwindColor = (colorKey, colorPalette) =>
  colorPalette.reduce(
    (acc, color, idx) => ({ ...acc, [`${colorKey}-${(idx + 1) * 100}`]: color }),
    {},
  );

const space = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '3rem',
};

const height = {
  header: '60px',
  footer: '60px',
  contents: 'calc(100vh - 120px)',
};

const colors = {
  'black-base': '#343a40',
  ...toTailwindColor('brand', [
    '#e6f7ff',
    '#bae7ff',
    '#91d5ff',
    '#69c0ff',
    '#40a9ff',
    '#1890ff',
    '#096dd9',
    '#0050b3',
    '#003a8c',
    '#002766',
  ]),
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      padding: { ...space },
      margin: { ...space },
      gap: { ...space },
      height: { ...height },
      minHeight: { ...height },
      colors: { ...colors },
    },
  },
  plugins: [],
};
