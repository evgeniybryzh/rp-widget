const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  (config) => {
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== "MiniCssExtractPlugin"
    );

    // Modify CSS handling to inline styles
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.oneOf) {
        rule.oneOf = rule.oneOf.map((subRule) => {
          if (subRule.test && subRule.test.toString().includes("css")) {
            return {
              ...subRule,
              use: subRule.use.map((useRule) => {
                if (
                  typeof useRule === "object" &&
                  useRule.loader &&
                  useRule.loader.includes("mini-css-extract-plugin")
                ) {
                  return { loader: require.resolve("style-loader") };
                }
                return useRule;
              }),
            };
          }
          return subRule;
        });
      }
      return rule;
    });

    // Other Webpack customizations
    config.output.filename = "bundle.js";
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };
    config.optimization.runtimeChunk = false;
    config.devtool = false; // Disable source maps

    return config;
  },
  addWebpackModuleRule({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  })
);
