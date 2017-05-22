var gulp = require('gulp');
var watchTask = function(){
	gulp.watch('./src/css/**/*.scss', ['css']);
	gulp.watch('./src/js/**/*.js', ['js']);
	gulp.watch('./src/html/**/*.html', ['html']);
}
gulp.task('watch', watchTask)

module.exports = watchTask;