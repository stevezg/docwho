var webpack = require('webpack');

module.exports = {
  entry: './components/main.jsx',
  output: {
    // Output the bundled file.
    path: './lib',
    // Use the name specified in the entry key as name for the bundle file.
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.jsx$/,
        loaders: ['babel-loader']
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
  externals: {
    // Don't bundle the 'react' npm package with the component.
    'react': 'React'
  },
  resolve: {
    // Include empty string '' to resolve files by their explicit extension
    // (e.g. require('./somefile.ext')).
    // Include '.js', '.jsx' to resolve files by these implicit extensions
    // (e.g. require('underscore')).
    extensions: ['', '.js', '.jsx']
  }
};
