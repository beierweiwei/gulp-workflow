var gulp = require('gulp');
var marked = require('gulp-marked');
var path = require('path');
var browser = require('browser-sync');
var fs = require('fs');

function markedTask (){
	// var tpl = fs.readFileSync(path.resolve(config.src, config.md.src, config.md.tplSrc, '*.html'), function(file){
	// 	return file.content;
	// });
	return gulp.src(path.resolve(curPath, config.src, config.md.src, '**/*.md'))
	.pipe(marked())
	.pipe(gulp.dest(path.resolve(curPath, config.dist, config.md.dist)))
	.pipe(browser.stream());
	
}

gulp.task('md', markedTask);
module.exports = markedTask;