module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        main: ['Montserrat']
      },
      typography: {
        DEFAULT: {
          css: {
            fontWeight: '500',
            strong: {
              fontWeight: '700',
            },
          },
        },
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
