let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let helpers = require('./helpers');

module.exports = {
    entry: {
      'polyfills': './src/client/polyfills.ts',
      'vendor': './src/client/vendor.ts',
      'app': './src/client/main.ts'
  },

    resolve: {
      extensions: ['.js', '.ts']
  },
    module: {
      exprContextCritical: false,
      loaders: [{
        test: /\.ts$/,
        loaders: ['ts-loader', 'angular2-template-loader']
    },
    {
        test: /\.html$/,
        loader: 'html-loader'
    },
    {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
    },
    {
        test: /\.css$/,
        loaders: ['css-to-string-loader', 'css-loader']
    }
    ]
  },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
    }),

      new HtmlWebpackPlugin({
        template: 'src/client/index.html'
    })
  ]
};
