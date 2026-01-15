const path = require("path");

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

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
    path: dist,
  },
  devServer: {
    static: dist,
    port: 3000,
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: ".public/index.html",
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
    }),
  ],
  mode: "development",
};
