var gulp = require('gulp');
var browerSync = require('browser-sync');
 
var browser = browerSync.create();

var serverTask = function (done) {
	browser.init({
		server: {
			baseDir: './dist/html/'
		}
	});
	done && done();

}

gulp.task('server', serverTask);

module.exports = serverTask;