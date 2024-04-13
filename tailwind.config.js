/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '216': '50rem',
      },
      backgroundImage: {
        'lebanon-food': "url('../public/food.jpg')",
      },
    },
    fontFamily: {
      'display': ['"Roboto Condensed"'],
      'satisfy': ['"Satisfy"'],
    },
  },
  plugins: [],
}
