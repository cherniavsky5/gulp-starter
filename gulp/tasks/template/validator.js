const config = require('../../config');

const gulp          = require('gulp');
const htmlValidator = require('gulp-w3c-html-validator');

module.exports = () => {
  return gulp.src(config.templates.html)
    .pipe(htmlValidator())
    .pipe(htmlValidator.reporter());
};
