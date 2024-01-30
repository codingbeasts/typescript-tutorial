const path = require("path");

const src = path.resolve(__dirname, "src");
const pub = path.resolve(__dirname, "public");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: src + "/js/app.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /nodemodules/,
        use: {
          loader: "ts-loader",
        },
        include: [src],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "./js/bundle.js",
    path: pub,
  },
  devServer: {
    static: pub,
    port: 3000,
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
    }),
  ],
  mode: "development",
};
