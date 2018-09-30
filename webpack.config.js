const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry:[
    './src/js/entry-client.js',
    './src/styles/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
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
      },
      {
        test: /\.(png|jpg|gif|svg|ttf)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }
    ],
    resolve: {
      alias: {
        vue: 'vue/dist/vue.js',
        '@': path.resolve(__dirname, 'src'),
        styles: path.resolve(__dirname, 'src', 'styles')
      }
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'main.bundle.css',
        allChunks: true
      })
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
      },
      performance: {
        hints: false
      },
      devtool: '#eval-source-map'
    }

    if (process.env.NODE_ENV === 'production') {
      module.exports.devtool = '#source-map'
      // http://vue-loader.vuejs.org/en/workflow/production.html
      module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          compress: {
            warnings: false
          }
        }),
        new webpack.LoaderOptionsPlugin({
          minimize: true
        })
      ])
    }
  }
