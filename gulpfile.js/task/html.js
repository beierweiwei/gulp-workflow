var gulp = require('gulp');
var path = require('path');
// var uglifyHtml = require('gulp-uglify-html');
var config = require('../task.config')

var htmlTask = function () {
	var curPath = process.env.PWD || process.cwd();
	var paths = {
		//拼接路径
		dist: path.resolve(curPath, config.dist, config.html.dist),
		src: path.resolve(curPath, config.src, config.html.src,  '**/*.html')
	}
	return gulp.src([paths.src])
	// .pipe(uglifyHtml())
	.pipe(gulp.dest(paths.dist));
}
gulp.task('html', htmlTask);
module.exports = htmlTask;