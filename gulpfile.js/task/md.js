var marked = require('gulp-marked');
var path = require('path');
var browser = require('browser-sync');
var fileinclude = require('gulp-file-include');
var merge = require('merge-stream');
var fs = require('fs');
var gulp = require('gulp');
var through2 = require('through2');
//var  markdown = require('markdown');
function markedTask (){
	var paths = {
		src : path.resolve(config.src, config.md.src, '*.md'),
		dist: path.resolve(curPath, config.dist, config.md.dist)
	};
	opt = {
			blog: 'wjj',
			foot: 'foot',
			header: 'header',
			nav: '..',
			title: '..',
			tpl: path.resolve(curPath, config.src, config.md.tplSrc),
	}
	return gulp.src(paths.src)
	.pipe(marked())
	.pipe(parse2Html(opt))
	.pipe(gulp.dest(paths.dist));

	function parse2Html(opt) {
		return through2.obj(function(file, enc , cb){
			var contentStr = file.contents.toString();
			var tpl = fs.readFileSync(opt.tpl);
			var tplStr = tpl.toString();
			tplStr = tplStr.replace('@@content', contentStr)
				.replace('@@title', file.relative.replace('.html', ''));

			file.contents = new Buffer(tplStr);
			this.push(file);
			cb();	
		})
		
	}
}
gulp.task('md', markedTask);
module.exports = markedTask;