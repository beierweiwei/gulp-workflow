var merge = require('webpack-merge');
var baseConfig = require('./webpack.config.base.js')();
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
module.exports = function () {
	return merge(baseConfig, {
        plugins: [

          //   new webpack.optimize.UglifyJsPlugin({
              
          //   }),
          // new webpack.DefinePlugin({
          //   'process.env.NODE_ENV': '"production"',
          // }),
          //   new webpack.optimize.CommonsChunkPlugin({
          //       name: 'vendor' // Specify the common bundle's name.
          //   }),
          //   new webpack.optimize.CommonsChunkPlugin({
          //       name: 'mainfest'
          //   }),
          //   new ExtractTextPlugin({
          //       filename: "[name].[contenthash].css",
          //       disable: process.env.NODE_ENV !== "product"
          //   }),
        ],
        // 关于模块配置
        module: {
            // 模块规则（配置 loader、解析器等选项）

        },
        // 解析模块请求的选项
        resolve: {
            // 用于查找模块的目录
            modules: [
                "node_modules",
                path.resolve(__dirname, "../../src")
            ],

            extensions: ['.js', '.json', '.jsx', '.css'],
            // 模块别名列表
            alias: {
                'module': 'new-module',

            }
        },
	})
}