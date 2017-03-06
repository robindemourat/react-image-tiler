const path = require('path')

const paths = {
  app: path.join(__dirname, 'build', 'src'),
  build: path.join(__dirname, 'lib'),
}

const config = {
  entry: {
    app: `${paths.app}/Tiler.js`,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  output: {
    path: paths.build,
    filename: 'index.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
      },
    ],
  },
}

module.exports = config
