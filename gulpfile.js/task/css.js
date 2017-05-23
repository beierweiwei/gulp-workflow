var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../task.config');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var browser = require('browser-sync');


function styleTask() {
	//获取程序当运行目录
	var curPath = process.env.PWD || process.cwd();
	var paths = {
		//拼接路径
		dist: path.resolve(curPath, config.dist, config.css.dist),
		src: path.resolve(curPath, config.src, config.css.src,  '**/*.scss')
	};
	return gulp.src([paths.src])
		.pipe(sass())
		.pipe(concat('main.css'))
		.pipe(autoprefixer({browers: 'last 2 version', cascade: false}))
		.pipe(gulp.dest(paths.dist))
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.dist))
		.pipe(browser.stream())
		;


}
gulp.task('css', styleTask);
module.exports = styleTask;