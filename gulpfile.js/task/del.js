var path = require('path');
var del = require('del');
var gulp = require('gulp');
var config = require('../task.config');

function delTask() {
	console.log(process.cwd());
	return del([config.dist],{force: true}).then(function(){
		console.log('clearn ..end')
	});
}

gulp.task('clearn', delTask);

module.exports = delTask;