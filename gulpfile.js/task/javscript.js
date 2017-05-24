var path = require('path');
var uglify = require('gulp-uglify');
var gulp = require('gulp');
var rename = require('gulp-rename');
var config = require('../task.config')
var concat = require('gulp-concat');

function jsTask() {
	//获取程序当运行目录
	var curPath = process.env.PWD || process.cwd();
	var paths = {
		//拼接路径
		dist: path.resolve(curPath, config.dist, config.javascript.dist),
		src: path.resolve(curPath, config.src, config.javascript.src,  '**/*.js')
	}
	var jsStream = gulp.src(paths.src)
		.pipe(concat('main.js'))
		.pipe(gulp.dest(paths.dist))
		.pipe(uglify())
		.pipe(rename({sufixx: '.min'}))
		.pipe(gulp.dest(paths.dist));
	return jsStream;
}
gulp.task('javascript', jsTask);

module.exports = jsTask;