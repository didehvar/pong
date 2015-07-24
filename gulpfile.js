var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('connect', function() {
  plugins.connect.server({
    root: 'build',
    livereload: true,
    port: 8888
  });
});

gulp.task('html', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('build'))
    .pipe(plugins.connect.reload());
});

gulp.task('js', function() {
  return gulp.src('app/js/*.js')
    .pipe(plugins.traceur())
    .pipe(plugins.rename({ extname: '.min.js' }))
    .pipe(gulp.dest('build/js'))
    .pipe(plugins.connect.reload())
    .on('error', plugins.util.log);
});

gulp.task('vendor', function() {
  return gulp.src('app/js/vendor/*.js')
    .pipe(plugins.concat('vendor.js'))
    .pipe(plugins.uglify())
    .pipe(plugins.rename({ extname: '.min.js' }))
    .pipe(gulp.dest('build/js'))
    .pipe(plugins.connect.reload())
    .on('error', plugins.util.log);
});

gulp.task('img', function() {
  return gulp.src('app/img/*.*')
    .pipe(gulp.dest('build/img'))
    .pipe(plugins.connect.reload());
});

gulp.task('clean', function() {
  return gulp.src('build', { read: false })
    .pipe(plugins.clean());
});

gulp.task('watch', function() {
  gulp.watch('app/index.html', ['html']);
  gulp.watch('app/js/*.js', ['js']);
  gulp.watch('app/js/vendor/*.js', ['vendor']);
  gulp.watch('app/img/*.*', ['img']);
});

gulp.task('build', ['html', 'js', 'vendor', 'img']);

gulp.task('default', ['connect', 'watch']);
