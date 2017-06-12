var gulp = require('gulp');
var browser = require('browser-sync');
var path = require('path');
var config = require('../task.config')
var webpackConfig = require('../config/webpack.config.dev')();
var webpack = require('webpack');
var compiler = webpack(webpackConfig);
var server = config.server;
server.middleware = [
	require('webpack-dev-middleware')(compiler, {
	  stats: 'errors-only',
      watchOptions: config.server.watchOptions || {},
      publicPath: './'
	})
]

var serverTask = function () {
	browser.init(config.server);
}

gulp.task('server', serverTask);

module.exports = serverTask;