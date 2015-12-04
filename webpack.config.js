module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"       
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.s?css$/,
        loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
      }
    ]
  },
  watch: true
};
