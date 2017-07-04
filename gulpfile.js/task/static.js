var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync')
var staticTask = function(){
	return gulp.src(path.resolve(curPath, config.src, config.static.src, '**!readme.md' ))
		.pipe(gulp.dest(path.resolve(curPath, config.dist, config.static.dist)))
		.pipe(browserSync.stream())
}
gulp.task('static', staticTask);
module.exports = staticTask