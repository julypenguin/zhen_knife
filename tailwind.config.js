module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "144": "36rem",
        "176": "44rem",
        "10/21": "47.6%"
      },
      padding: {
        "112": "28rem",
        "144": "36rem",
        "176": "44rem",
        "25p": "25%",
        "60p": "60%",
        "80p": "80%"
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
        "10xl": "104rem"
      },
      colors: {
        green: {
          line: "#07BE5B",
        },
        blue: {
          facebook: "#1877F2",
        },
        menu: {
          phone: "#001C38"
        },
      },
      fontFamily: {
        "catamaran": ["Catamaran", "Sans-serif"],
        "playfair": ["Playfair Display", "Sans-serif"],
        "abel": ["Abel", "Sans-serif"],
        "jhengHei": ["Microsoft JhengHei", "Helvetica Neue", "Helvetica", "Arial", "dashicons", "sans-serif"],
        "vidaloka": ["Vidaloka", "Sans-serif"]
      },
      backgroundImage: {
        'scissors': "url('/src/img/sid/img282.jpg')",
        'mainView': "url('/src/img/mainView.png')"
      }
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      brightness: ['hover', 'group-hover', 'focus'],
      scale: ['hover', 'group-hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
