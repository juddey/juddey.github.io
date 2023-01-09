/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.html',
    './*.markdown'
  ],
  theme: {
    screens: {
      screen: {"raw": "screen"},
      print: {"raw": "print"},
      xsm: "500px",
      sm: "640px",
      md: "811px",
      lg: "1051px",
      xl: "1280px"
    },
    extend: {
      maxWidth: {
        "letter": "66.40625rem",
        "a4": "64.609375rem"
      },
      height: {
        "letter": "85.9375rem",
        "letter-col": "71.625rem",
        "letter-col-full": "77.9375rem",
        "a4": "91.350883rem",
        "a4-col": "77.038383rem",
        "a4-col-full": "83.350883rem",
      },

    },
  },
  plugins: [require('@tailwindcss/typography')],
}
