module.exports = {
  jit: true,
  purge: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: [],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        monsterrat: ["Monsterrat", "sans-serif"],
      },
      // use this if you want to use custom color
      // colors: {
      //   transparent: "transparent",
      //   current: "currentColor",
      //   purple: "#7652c6",
      // },
    },
  },
  plugins: [],
};
