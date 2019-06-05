let {smart} = require('webpack-merge');
let base = require('./webpack.base.js');
let path = require('path');
module.exports = smart(base, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',   
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        host: 'localhost',
        hot: true,
        open: true,
        compress: true,
        port: 8888
    }
})