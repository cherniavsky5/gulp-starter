const gulp = require('gulp');
const pug = require('gulp-pug');

function compilationPug() {
  return gulp.src('src/pages/**/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dev'));
}

module.exports = compilationPug;
