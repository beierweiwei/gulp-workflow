var gulp = require('gulp');
var sequence = require('gulp-sequence');
function filteTasks(tasks){
	   var ft = tasks.map(function(task){
	   		//如果gulp命令不带参数，默认是开发环境
	   		if(task==="javascript" && env.dev === true) return;
	   		if(task==="server" && env.product === true) return;
	   		if(config[task] && config[task].able === false) return;
	   		return task;
	   });
	  return ft.filter(function(task){
	   		if(task) return task;
	   })
}

function defaultTask(done) {
	var tasks = ['clearn','javascript', 'css', 'html', 'static', 'md', 'server', 'ftp', 'watch'];
	tasks = filteTasks(tasks);

	console.log('done', tasks);

	sequence(...tasks, done);
	//sequence('clearn', 'javascript', 'css', 'html', 'md', 'server', 'watch', done)
}
gulp.task('default', defaultTask);
module.exports = defaultTask;