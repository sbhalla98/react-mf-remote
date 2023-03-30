const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');
const { dependencies } = require("./package.json");

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name].js",
  },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].[hash:8].js',
//     sourceMapFilename: '[name].[hash:8].map',
//     chunkFilename: '[id].[hash:8].js'
//   },
  target: 'web',
  devServer: {
    port: '8080',
    static: {
      directory: path.join(__dirname, 'public')
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
//   exposes: {
//     './Loading': './src/app.js'
//   },
  module: {
    rules: [
      {
        test: /\.(js|jsx|css)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader', 
      },
      {
        test: /\.css$/, 
        exclude: /node_modules/, 
        use: 'css-loader', 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
    // new ModuleFederationPlugin({
    //     name: 'remote',
    //     filename: "app.js",
    //     exposes: {
    //         './Loading': './src/app.js'
    //     }
    // }),
  ]
};