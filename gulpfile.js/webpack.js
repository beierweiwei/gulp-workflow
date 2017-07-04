var webpack = require('webpack');
var gulp = require('gulp');
var webpackConfig = require('../lib/webpack-config.js');

var webpackTask = function(done){
	webpack(webpackConfig, function(err, stats){
		gulp.util.console('webpack-start');
		doen && done();
	});
};
