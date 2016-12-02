var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('less', function() {
  return gulp.src('app/less/**/*.less')
    .pipe(less()) //using gulp-less
    .pipe(gulp.dest('app/css')) //Gets all files ending with .less in app/less  and child directories
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'less'], function() {
  gulp.watch('app/less/**/*.less', ['less']);
  //Reloads browser when html or js fiules change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});
