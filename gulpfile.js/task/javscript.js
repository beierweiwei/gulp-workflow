var path = require('path');
var uglify = require('gulp-uglify');
var gulp = require('gulp');
var rename = require('gulp-rename');
var config = require('../task.config')
var concat = require('gulp-concat');

function jsTask() {
	var jsStream = gulp.src(path.resolve(config.src, config.js.src))
		.pipe(concat('main.js'))
		.pipe(gulp.dest(path.resolve(config.dist, config.js.dist)))
		.pipe(uglify())
		.pipe(rename({sufixx: '.min'}))
		.pipe(gulp.dest(path.resolve(config.dist, config.js.dist)));
	return jsStream;
}
gulp.task('javascript', jsTask);

module.exports = jsTask;