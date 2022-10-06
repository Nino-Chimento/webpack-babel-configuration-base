const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: `index.js`,
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  devServer: {
    static: path.resolve(__dirname, './public'),
    port: 3000,
    allowedHosts: ['0.0.0.0', 'localhost'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
