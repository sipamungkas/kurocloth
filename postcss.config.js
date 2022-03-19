// const tailwindcss = require("tailwindcss");
// const autoprefixer = require("autoprefixer");
// module.exports = {
//   plugins: ["postcss-preset-env", tailwindcss, autoprefixer],
//   ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
// };

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  ...(process.env.NODE_ENV === "production"
    ? { cssnano: { preset: "default" } }
    : {}),
};
