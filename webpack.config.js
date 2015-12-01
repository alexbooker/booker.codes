module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'       
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  watch: true
};
