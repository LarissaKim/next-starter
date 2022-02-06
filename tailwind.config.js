module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './design/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.sky.500'),
              '&:hover': {
                color: theme('colors.sky.600'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.neutral.100'),
            h1: {
              color: theme('colors.neutral.100'),
            },
            h2: {
              color: theme('colors.neutral.100'),
            },
            h3: {
              color: theme('colors.neutral.100'),
            },
            h4: {
              color: theme('colors.neutral.100'),
            },
            h5: {
              color: theme('colors.neutral.100'),
            },
            h6: {
              color: theme('colors.neutral.100'),
            },
            strong: {
              color: theme('colors.neutral.100'),
            },
            blockquote: {
              color: theme('colors.neutral.100'),
            },
            code: {
              color: theme('colors.neutral.100'),
            },
            figcaption: {
              color: theme('colors.neutral.500'),
            },
            hr: {
              color: theme('colors.neutral.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
