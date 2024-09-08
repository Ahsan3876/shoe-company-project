/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens: {
        'media440': '440px',
        'media560': '560px',
        'media1200': '1200px'
      }, 
      backgroundImage: {
        'testimonial-section': "url('./images/background-3.png')",
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("open-menu", ".open-menu &");
    })
  ],
}

