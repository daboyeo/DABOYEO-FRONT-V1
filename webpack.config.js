const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mode: "none",
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(jpg|png|jpeg|bmp|gif|svg)?$/,
        loader: "file-loader",
      },
    ],
  },
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "s3"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env.GOOGLE_OAUTH_CLIENT_ID": JSON.stringify(
        process.env.GOOGLE_OAUTH_CLIENT_ID
      ),
      "process.env.GOOGLE_OAUTH_CLIENT_PW": JSON.stringify(
        process.env.GOOGLE_OAUTH_CLIENT_PW
      ),
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
