var gulp = require('gulp');
var sequence = require('gulp-sequence');

function defaultTask(done) {
	console.log('done');
	sequence('clearn', 'javascript', 'css', 'html', 'md', 'server', 'watch',done)
}
gulp.task('default', defaultTask);
module.exports = defaultTask;