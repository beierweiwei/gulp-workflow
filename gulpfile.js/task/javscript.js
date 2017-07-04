var path = require('path');
// var uglify = require('gulp-uglify');
var gulp = require('gulp');
// var rename = require('gulp-rename');
// var config = require('../task.config')
// var concat = require('gulp-concat');
// 用webpack打包js文件
var webpack = require('webpack');
var conifg = require('../config/webpack.config.dev')();


function jsTask() {
	//获取程序当运行目录
	webpack(config);
}
gulp.task('javascript', jsTask);

module.exports = jsTask;