module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
      },
      colors: {
        cream: {
          DEFAULT: "#F3EBDD",
          light: "#FAF6EE",
          border: "#E5DDD0",
          hover: "#EFE6D5",
        },
        wine: {
          DEFAULT: "#8E1B1B",
          hover: "#741515",
          soft: "#A62B2B",
        },
        butter: {
          DEFAULT: "#FFF3A3",
          soft: "#FDF5C4",
        },
        wood: {
          DEFAULT: "#A8693A",
          light: "#C88A5B",
          subtle: "#D8C4AF",
        },
        espresso: {
          DEFAULT: "#2A1210",
          card: "#351916",
          elevated: "#41201C",
          border: "#512C26",
          ink: "#3D2B24",
          muted: "#6E594F",
          darkMuted: "#C7B5A5",
        },
      },
      borderRadius: {
        card: "12px",
        btn: "10px",
      },
      maxWidth: {
        editorial: "480px",
      },
    },
  },
};
