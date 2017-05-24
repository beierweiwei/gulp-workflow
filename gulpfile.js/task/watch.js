var gulp = require('gulp');
var watch = require('gulp-watch');
var path = require('path');
var tasks = ['css', 'javascript', 'html', 'static', 'md'];

function watchTask(cb){
	tasks.forEach(function(task, i){
		let ext ='**';
		if(task == 'html') ext = '**/*.html';
		watch([path.resolve(curPath, config.src, config[task].src, ext)], function(){
			require('./' + task)();
		});
	});
	cb();
}

gulp.task('watch',watchTask);
module.exports = watchTask;

