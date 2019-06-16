// let path = require("path");
let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	entry: {
		index: './src/index.ts',
		vue: './src/vue/index.ts'
	},
	output: {
		filename: 'js/[name].[hash:8].js',
		path: process.cwd() + '/dist'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			chunks: ['index'],
			inject: true,
			hash: true,
			minify: {
				collapseWhitespace: true, // 去掉空行
				removeComments: true // 去掉注释
			}
		}),
		new HtmlWebpackPlugin({
			template: './public/vue.html',
			filename: 'vue.html',
			chunks: ['vue'],
			inject: true,
			hash: true,
			minify: {
				collapseWhitespace: true, // 去掉空行
				removeComments: true // 去掉注释
			}
		}),
		new CopyWebpackPlugin([{ from: './public/dll', to: './dll' }]),
		new MiniCssExtractPlugin({
			filename: 'css/[id].[name].[hash:8].css'
		}),
		new webpack.DllReferencePlugin({
			manifest: process.cwd() + '/public/dll/' + 'vue.dll.json'
		}),
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
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
		extensions: ['.vue', '.js', '.ts', '.tsx', '.css', '.less', '.json'],
		alias: {
			'@': process.cwd() + '/src'
		}
	}
};
