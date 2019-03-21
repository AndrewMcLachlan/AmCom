const path = require("path");

module.exports = {
  entry: "./scripts/react/app.js",
  output: {
    path: path.join(__dirname, "/wwwroot/js"),
    filename: "regex.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      }
    ]
  }
};