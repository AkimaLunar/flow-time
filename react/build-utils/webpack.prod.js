const commonPaths = require('./common-paths')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  mode: 'production',
  output: {
    filename: 'static/[name].[hash].js',
    chunkFilename: 'static/[name].[chunkhash].js',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/styles.[hash].css',
      allChunks: true
    })
  ],
}

module.exports = config
