/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 28rem) 1fr',
        profile: 'max-content 1fr min-content',
      },
    },
  },
  plugins: [],
}
