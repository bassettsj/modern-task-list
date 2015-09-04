var _ = require('underscore');

var entry = './src/app/main.js';
var output = {
  path: __dirname,
  filename: 'main.js'
};

module.exports.development = {
  debug : true,
  devtool : 'source-map',
  entry: entry,
  output: output,
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },
  module : {
    loaders : [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', sourceMaps: 'inline' }
    ]
  }
};

module.exports.production = _.extend({}, module.exports.development, {
  debug: false,
  module : {
    loaders : [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
});
