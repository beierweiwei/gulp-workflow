var gulp      = require('gulp')
var path      = require('path')
var rev       = require('gulp-rev')
var revNapkin = require('gulp-rev-napkin');

// 1) Add md5 hashes to assets referenced by CSS and JS files
gulp.task('default', function() {
  // Ignore files that may reference assets. We'll rev them next.


  return gulp.src('./b.js')
    .pipe(rev())
    .pipe(gulp.dest('./'))
    // .pipe(revNapkin({ verbose: false, force: true }))
    // .pipe(rev.manifest('./rev-manifest.json', {merge: true}))
    .pipe(gulp.dest('./'))
})
