// let webpack = require("webpack");
// let path = require("path");
// let CopyWebpackPlugin = require("copy-webpack-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: 'js/[name].[hash:8].js',
		path: process.cwd() + '/dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			inject: true,
			hash: true,
			minify: {
				collapseWhitespace: true, // 去掉空行
				removeComments: true // 去掉注释
			}
		}),
		new CleanWebpackPlugin(),
		// new CopyWebpackPlugin([{ from: "./public/favico.png", to: "./" }]),
		new MiniCssExtractPlugin({
			filename: 'css/main.css'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(css|less)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'less-loader'
				]
			},
			{
				test: /\.(png|gif|jpg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 100 * 1024, // 小于 100kb 转为 base64-url
							outputPath: 'img/'
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.css', '.json'],
		alias: {
			'@': process.cwd() + '/src'
		}
	}
};
