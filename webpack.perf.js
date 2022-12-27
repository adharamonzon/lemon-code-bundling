const { merge } = require('webpack-merge');
const prod = requiere('./webpack.prod');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(prod, {
  plugins: [new BundleAnalyzerPlugin()],
});
