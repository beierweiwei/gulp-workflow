var gulp = require('gulp');
var browser = require('browser-sync');
var path = require('path');

var serverTask = function () {
	browser.init(config.server);
}

gulp.task('server', serverTask);

module.exports = serverTask;