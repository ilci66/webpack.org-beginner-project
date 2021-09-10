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
entry: {
  index: './src/index.js',
  print: './src/print.js',
},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
