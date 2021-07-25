module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "144": "36rem",
        "176": "44rem",
      },
      padding: {
        "144": "36rem",
        "176": "44rem",
      },
      fontFamily: {
        "catamaran": ["Catamaran", "Sans-serif"],
      }
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      brightness: ['hover', 'group-hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
  ],
}
