module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: { max: "1090px" },
      },
      fontFamily: {
        primary: ["var(--primary-font)"],
        secondary: ["var(--secondary-font)"],
        tertiary: ["var(--tertiary-font)"],
        karrera: ["var(--kerrera-font)"],
        Satoshi: ["var(--Satoshi-font)"],
        Satoshi_Black: ["var(--Satoshi-Black-font)"],
      },
      fontWeight: {
        normal: "var(--font-normal)",
        medium: "var(--font-medium)",
      },
      colors: {
        primary: "var(--primary-color)",
        background: "var(--background-color)",
        dark: "var(--dark-color)",
        light: "var(--light-color)",
      },
      zIndex: {
        tooltip: "var(--z-tooltip)",
        fixed: "var(--z-fixed)",
        modal: "var(--z-modal)",
      },
      boxShadow: {
        ad: " 0 0 20px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
