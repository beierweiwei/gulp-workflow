### 使用 watchify 加速 browserify 编译

```javascript
var watchify = require('watchify');
var browserify = require('browserify');
var gulp = rquire('gulp');
var source = require('vinyl-soruce-stream');
var buffer = rquire('vinyl-buffer');
var gutil = rquire('gulp-util');
var sourcemaps = rquire('gulp-sourcemaps');
var assign = rquire('loadsh.assign');

//这里添加自定义 browserify选项
var customOpts = {
    enteries: ['./src/index.js'],
    debug: true
}

var opts = assing({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
//这里加入变换操作
比如： b.transform(coffeeify);

gulp.tast('js', bundle);//这样你就可以运行'gulp js'来编译文件
b.on('update', bundle);//当任何依赖发生改变时，运行打包工具
b.on('log', gutil.log);//输出编译日志到终端

function bundle(){
    return b.bundle()
    //记录错误
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    //可选项，如果不需要缓存文件内容，就删除
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true})) // 从 browserify 文件载入 map
    //在这里变换操作加入管道
    pipe(sourcemaps.write('./'))//写入.map文件
    .pipe(gulp.dest('./dist'));
}
```

### 多数编译工具都是工厂函数的形式
一个函数，接受一个对象参数。
对象包含了所有配置
对象可以通过Objeact.assing(),不断扩充，根据process...判断是否为生产环境，传递相应的参数

### what is Vinyl 
Vinyl is a very simple metadata object that describes a file. When you think of a file, two attributes come to mind: path and contents. These are the main attributes on a Vinyl object. 

### gulp-concat

```javascript
var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src(['./lib/file3.js', './lib/file1.js', './lib/file2.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src(['./lib/file3.js', './lib/file1.js', './lib/file2.js'])
    .pipe(concat({ path: 'new.js', stat: { mode: 0666 }}))
    .pipe(gulp.dest('./dist'));
});

//&sourcemaps

var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('javascript', function() {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});
```

### gulp-tap
Some filters like gulp-coffee process all files. What if you want to process all JS and Coffee files in a single pipeline. Use tap to filter out .coffee files and process them through the coffee filter and let JavaScript files pass through.

```javascript
gulp.src("src/**/*.{coffee,js}")
    .pipe(tap(function(file, t) {
        if (path.extname(file.path) === '.coffee') {
            return t.through(coffee, []);
        }
    }))
    .pipe(gulp.dest('build'));

```


