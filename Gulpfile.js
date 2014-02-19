var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    notify = require("gulp-notify");

// Styles
gulp.task('styles', function () {
  gulp.src('sass/*.scss')
    .pipe(sass({ style: 'compressed' }))
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Styles task completed' }))
  ;
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('sass/**/*.scss', ['styles']);

});
