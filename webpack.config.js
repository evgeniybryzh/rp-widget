const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");
require("dotenv").config(); // No need to specify the path unless it's different

module.exports = {
  entry: "./src/index.tsx", // Specify TypeScript entry point
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Add .tsx and .ts extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  devServer: {
    port: 4000,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Match .ts and .tsx files
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(js|jsx)$/, // Match .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // SCSS Modules
      {
        test: /\.(sa|sc)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: {
                namedExport: false,
              },
            },
          },
        ],
      },
      // Global CSS and SCSS
      {
        test: /\.(sa|sc|c)ss$/, // Match global SCSS files
        exclude: /\.module\.(sa|sc)ss$/, // Exclude SCSS module files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf)$/, // Match images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
      // SVG loader
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: true, // Enable SVG optimization
            },
          },
        ],
      },
    ],
  },
};
