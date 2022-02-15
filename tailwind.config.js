module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      1: "0.1em",
      2: "0.2em",
      3: "0.3em",
      4: "0.4em",
      5: "0.5em",
      6: "0.6em",
      7: "0.7em",
      8: "0.8em",
      9: "0.9em",
      10: "1em",
      // ...
      30: "3em",
    },
    extend: {},
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
