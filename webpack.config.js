// webpack.config.js
const webpackDevConfig = require('./config/webpack.dev.js');

module.exports = {
  configureWebpack: webpackDevConfig,

    module: {
      rules: [
        {
          test: /\.js$/, // This will apply to JavaScript or JSX files 
          exclude: /node_modules/, // This will exclude files in the node_modules directory
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ],
    },
  };