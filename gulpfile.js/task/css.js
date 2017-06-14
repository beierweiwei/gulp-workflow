var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../task.config');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var browser = require('browser-sync');

var fs = require('fs');
var merge = require('merge-stream');
var rename = require('gulp-rename');

function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

function styleTask() {
	//获取程序当运行目录
	var paths = {
		//拼接路径
		dist: path.resolve(curPath, config.dist, config.css.dist),
		src: path.resolve(curPath, config.src, config.css.src)
	};
	 var folders = getFolders(paths.src);

	 var tasks = folders.map(function(folder){
	 	return gulp.src(path.join(paths.src, folder, '/*.scss'))
		.pipe(sass()).on('error', function(err){
			console.log('sass error', err)
		})
		.pipe(concat(folder + '.css'))
		.pipe(autoprefixer({browers: 'last 2 version', cascade: false}))
		.pipe(gulp.dest(paths.dist))
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.dist))
		.pipe(browser.stream())
		;
	 })

	 return merge(tasks) || gulp.src();
	
}
gulp.task('css', styleTask);
module.exports = styleTask;