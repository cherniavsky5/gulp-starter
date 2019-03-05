const config = require('../../config');

const gulp       = require('gulp');
const prettyHtml = require('gulp-pretty-html');

function pretty() {
  return gulp.src(`${config.templates.dev}/**/*.html`)
    .pipe(prettyHtml({
      indent_size: 2,
      indent_inner_html: true
    }))
    .pipe(gulp.dest(config.templates.dev))
}

module.exports = pretty;
