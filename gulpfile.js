const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile sass
gulp.task('sass', () => {
  return gulp.src(['./sass/**/*.scss'])
  .pipe(sass())
  .pipe(gulp.dest('assets'))
  .pipe(browserSync.stream());
});

// Watch & Serve
gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './'
  });
  gulp.watch(['./sass/**/*.scss'], ['sass']);
  gulp.watch(['*.html']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
