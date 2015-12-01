module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'       
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  watch: true
};
