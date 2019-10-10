const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    all: __dirname + '/source/javascripts/index.js',
  },
  resolve: {
    modules: [path.resolve(__dirname + '/source/javascripts'), 'node_modules'],
  },
  output: {
    path: __dirname + '/.tmp/webpack_output',
    filename: 'javascripts/[name].js'
  },
  module: {
    rules: [
      {
        test: /.*\.sass$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          { loader: 'import-glob-loader' }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'all.css' }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }
    })
  ]
};

