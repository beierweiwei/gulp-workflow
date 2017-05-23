var gulp = require('gulp');
var browser = require('browser-sync');
var path = require('path');
var serverTask = function () {
	browser.init({
		server: {
			baseDir: './',

		},
		startPath: "dist/html/"
	});

	
	gulp.watch(path.resolve(process.cwd(), config.src, config.css.src, '**/*.scss'),['css']);
	gulp.watch('./src/html/**/*.html', ['html']).on('change',browser.reload);


}

gulp.task('server', serverTask);

module.exports = serverTask;