const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// basically telling it where to look at
// If a webpack.config.js is present, the webpack command picks it up by default. 
// We use the --config option in the "npx webpack --config webpack.config.js" after 
// creating the config file, only to show that you can pass a configuration 
// of any name. This will be useful for more complex configurations that need to 
// be split into multiple files.

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',
  },
  // it's noted the it's good for development but not for production 
  // devtool: 'inline-source-map',
  // devServer: {
    // this eliminates the necessity to refresh the page on the broswer to see the changes
    // static: './dist'
  // },
  // this plugin will generate it's own index.html and replace ours after "npm run build" command
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Development',
  //   }),
  // ],
  output: {
    // commented for loader example
    // filename: '[name].bundle.js',
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  }, 
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

// // LOADER example
// const path = require('path');

// module.exports = {
//   entry: './path/to/my/entry/file.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'my-first-webpack.bundle.js',
//   },
// };