module.exports = {
  mode: 'jit',
  purge: {
    content: ["*.html", './safelist.txt'],
  },
  theme: {
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
    },
    fontFamily: {
      sans: ["realist", "sans"],
      script: ["hello_beautiful", "sans-serif"],
    },
    filter: {
      none: "none",
      grayscale: "grayscale(1)",
    },
    extend: {
      colors: {
        'blue': {
          DEFAULT: '#002D5D',
          '50': '#007BFE',
          '100': '#0072EC',
          '200': '#0061C8',
          '300': '#0050A4',
          '400': '#003E81',
          '500': '#002D5D',
          '600': '#00264E',
          '700': '#001E3E',
          '800': '#00172F',
          '900': '#000F20'
        },
        'thistle': {
          DEFAULT: '#CAC7A7',
          '50': '#FEFEFD',
          '100': '#F8F8F3',
          '200': '#EDEBE0',
          '300': '#E1DFCD',
          '400': '#D6D3BA',
          '500': '#CAC7A7',
          '600': '#B5B184',
          '700': '#A09A61',
          '800': '#7D794B',
          '900': '#5A5736'
        },
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        128: "32rem",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      inset: (theme, { negative }) => ({
        full: "100%",
        "1/2": "50%",
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
        25: "25vh",
        50: "50vh",
        75: "75vh",
      }),
      screens: {
        'landscape': {'raw': '(orientation: landscape)'},
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
    padding: ['responsive', 'group-hover', 'hover', 'focus', 'group-focus'],
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    container: false,
  },
};