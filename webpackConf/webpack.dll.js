const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	mode: 'production',
	entry: {
		vue: [
			'vue',
			'vue-property-decorator',
			'vue-router',
			'vuex',
			'vuex-module-decorators',
			'ant-design-vue'
		]
	},
	output: {
		filename: '_dll_[name].js',
		library: '_dll_[name]',
		path: process.cwd() + '/public/dll'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.DllPlugin({
			name: '_dll_[name]',
			path: process.cwd() + '/public/dll/' + '[name].dll.json'
		})
	]
};
