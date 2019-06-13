let { smart } = require('webpack-merge');
let base = require('./webpack.base.js');
let TerserJSPlugin = require('terser-webpack-plugin');
let OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = smart(base, {
	mode: 'production',
	devtool: 'source-map',
	optimization: {
		minimizer: [
			new TerserJSPlugin({
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		],
		splitChunks: {
			cacheGroups: {
				common: {
					chunks: 'initial',
					minSize: 0,
					minChunks: 1
				},
				vendor: {
					priority: 1,
					test: /node_modules/,
					chunks: 'initial',
					minSize: 0,
					minChunks: 2
				}
			}
		}
	}
});
