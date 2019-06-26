const path = require("path");
const entryFile = "App.js";

module.exports = {
  entry: `./js/${entryFile}`,
  output: {
    filename: "out.js",
    path: path.resolve(`./js/build`)
  },
  devServer: {
    contentBase: path.join(__dirname, `.`),
    publicPath: "/js/build/",
    compress: true,
    port: 3001,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]

  },

};
