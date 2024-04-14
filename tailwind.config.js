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
        'plate': "url('./plate.png')",
        'table': "url('./table.jpg')",
        'checkered': "url('./checkered.jpg')",
        'menu-header': "url('./menu_header.png')",
      },
      colors: {
        'my-orange': '#EC9D3F',
        'my-light-green': '#E8E54E',
        'my-dark-green': '#7AA331',
        'my-light-purple': '#FB9FDC',
        'my-dark-purple': '#BB378E',
        'my-background': '#FDF4E9',
      },
    },
    fontFamily: {
      'display': ['"Roboto Condensed"'],
      'satisfy': ['"Satisfy"'],
    },
  },
  plugins: [],
}
