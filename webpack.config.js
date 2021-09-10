const path = require('path');
// basically telling it where to look at
// If a webpack.config.js is present, the webpack command picks it up by default. 
// We use the --config option in the "npx webpack --config webpack.config.js" after 
// creating the config file, only to show that you can pass a configuration 
// of any name. This will be useful for more complex configurations that need to 
// be split into multiple files.
module.exports = {
// used "entry: './src'" instead of "entry: './src/index.js"
// it worked but not sure yet if I can just use a dir name instead of a file 
// to bundle all the files inside a directory into a file like "main.js" in this case
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
// added this part after installing css loader and style loader
  module: {
    rules: [
      {
        test: /\.css$/i,
        // they are loaded in the reverse order and the last one (first one in the array)
        // is expected to be javascript so the order in which you add them in the array matter
        use: ['style-loader', 'css-loader'],
        // This enables you to import './style.css' into the file that depends on that styling. 
        // Now, when that module is run, a <style> tag with the stringified css will be inserted 
        // into the <head> of your html file.
      },
      {
        // adding this config allowed me to use a png file (as background) in this project
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
