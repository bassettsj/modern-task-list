var webpack = require('webpack');

module.exports = function(config) {
  config.set({

  basePath: '',

  frameworks: ['mocha'],

  files: [
    'src/**/*_test.js?(x)'
  ],

  preprocessors: {
    'src/**/*_test.js?(x)': ['webpack', 'sourcemap']
  },

  webpack: {
    debug : true,
    devtool : 'inline-source-map',
    resolve: {
      extensions: [
        '',
        '.js',
        '.jsx'
      ]
    },
    module: {
      loaders : [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', sourceMaps: 'inline' }
      ]
    }
  },

  webpackMiddleware: {
    stats: {
      colors: true
    },
    quiet: true
  },

  reporters: ['dots'],

  port: 9876,

  colors: true,

  logLevel: config.ERROR,

  autoWatch: true,

  browsers: ['Chrome'],

  captureTimeout: 60000,

  singleRun: false
  });
};
