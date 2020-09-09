module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Spinnaker", "Jura", "sans-serif"],
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        "accent-1": "#333",
      },
      inset: {
        "1/2": "50%",
      },
    },
  },
  variants: {},
  corePlugins: {
    // ...
    container: false,
  },

  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        ".container": {
          width: "100%",

          // Breakpoints
          "@screen sm": {
            maxWidth: theme("screens.sm"),
          },
          "@screen md": {
            maxWidth: theme("screens.md"),
          },
          "@screen lg": {
            maxWidth: theme("screens.lg"),
          },
          "@screen xl": {
            maxWidth: theme("screens.xl"),
          },
          "@screen xxl": {
            maxWidth: theme("screens.xxl"),
          },
        },
      });
    },
  ],
};
