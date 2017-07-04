var merge = require('webpack-merge');
var baseConfig = require('./webpack.config.base')();
var config = require('../task.config.js');
var path = require('path');
var webpack = require('webpack');
module.exports = function () {
	return merge(baseConfig, {
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'dist')
		},
		plugins: [
            // new ExtractTextPlugin('index.css'),
        ],
        module: {
            // 模块规则（配置 loader、解析器等选项）

        },
        devtool: "",
	});
}