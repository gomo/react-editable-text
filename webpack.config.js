module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: ['./sample/src.js'],
  output: {
    path: `${__dirname}/sample`,
    filename: 'index.js'
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "prop-types": "PropTypes",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};