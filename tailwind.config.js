module.exports = {
  jit: true,
  content: ["./src/**/*.{html,js,ts}"],
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
