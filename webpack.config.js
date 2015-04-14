var path = require('path');

module.exports = {
  entry: './src/components/component-playground.jsx',
  externals: {
    'lodash': 'lodash',
    'react/addons': 'react/addons'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.jsx$/,
      loader: 'babel-loader!jsx-loader'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }]
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  }
};
