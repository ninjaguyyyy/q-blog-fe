/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      lg: { max: '1919px' },
      lgonly: { min: '1440px', max: '1919px' },

      md: { max: '1439px' },
      mdonly: { min: '768px', max: '1439px' },
      notmd: [{ max: '767px' }, { min: '1440px' }],
      mdup: { min: '1440px' },

      xs: { max: '766px' },
      xsonly: { max: '766px' },
      notxs: { min: '767px' },
      xsup: { min: '767px' },
    },
  },
  plugins: [],
};
