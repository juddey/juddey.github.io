/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.html',
    './*.markdown'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
