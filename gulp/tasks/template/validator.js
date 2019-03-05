const config = require('../../config');

const gulp          = require('gulp');
const htmlValidator = require('gulp-w3c-html-validator');

function htmlValidate() {
  return gulp.src(`${config.templates.dev}/**/*.html`)
    .pipe(htmlValidator())
    .pipe(htmlValidator.reporter());
}

module.exports = htmlValidate;
