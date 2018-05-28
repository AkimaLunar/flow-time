const commonPaths = require('./common-paths')
const webpack = require('webpack')
const port = process.env.PORT || 3000

const config = {
  mode: 'development',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true
  },
}

module.exports = config
