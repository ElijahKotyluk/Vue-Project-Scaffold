const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry:[
    './src/js/app.js',
    './src/styles/main.scss'
  ],
  output: {
    path: __dirname,
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader'
          }
        }
      }
    ],

  }
}
