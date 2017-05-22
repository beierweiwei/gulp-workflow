var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../task.config');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename')

function styleTask(argument) {
	console.log(process.env.PWD);
	return gulp.src(['./src/css/*.scss'])
		.pipe(sass())
		.pipe(concat('main.css'))
		.pipe(autoprefixer({browers: 'last 2 version', cascade: false}))
		.pipe(gulp.dest('./dist/css'))
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(path.join(config.dist, config.css.dist)))
		.pipe(browserSync.stream())

}
gulp.task('css', styleTask);
module.exports = styleTask;