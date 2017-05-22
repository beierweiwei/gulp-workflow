var gulp = require('gulp');
var path = require('path');
// var uglifyHtml = require('gulp-uglify-html');
var config = require('../task.config')

var htmlTask = function () {
	return gulp.src(['./src/html/*.html'])
	// .pipe(uglifyHtml())
	.pipe(gulp.dest('./dist/html/'));
}
gulp.task('html', htmlTask);
module.exports = htmlTask;