module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    semi: "never",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
