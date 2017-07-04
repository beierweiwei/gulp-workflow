var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('gulp-ftp');
var path = require('path');

var ftpTask = function() {

	return gulp.src(path.resolve(curPath, config.dist, "**"))
  		.pipe(ftp({
    		host: config.ftp.host,
    		port: config.ftp.port,
    		user: config.ftp.user,
    		pass: config.ftp.password
  		}))
  		.on('error', function(){
  			console.log('ftp err')
  		})
  		.pipe(gutil.noop());
}
gulp.task('ftp', ftpTask);
module.exports = ftpTask;