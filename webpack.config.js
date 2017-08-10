const webpack = require('webpack');
const path = require('path');
const WebHtmlPlugin = require('html-webpack-plugin');

const DEV = path.resolve(__dirname, 'app');
const OUTPUT = path.resolve(__dirname, 'dist');

const config = {
  entry: `${DEV}/index.jsx`,
  output: {
    path: OUTPUT,
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(jsx)$/, loader: 'babel-loader' },
      { test: /\.(js)$/, loader: 'babel-loader' },
      { test: /\.(css)$/, loader: ['style-loader', 'css-loader'] },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new WebHtmlPlugin({
      template: `${DEV}/index.html`,
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;
