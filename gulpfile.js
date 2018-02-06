const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('exemplo', function(){
  console.log('Gulp funfando!');
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
