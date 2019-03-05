const config = require('../../config');

const gulp         = require('gulp');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano      = require('gulp-cssnano');
const cssconcat    = require('gulp-concat-css');

const server = require('../server');

sass.compiler = require('node-sass');

module.exports = {
  dev: () => {
    return gulp.src(config.styles.src)
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest(config.styles.dev))
      .pipe(autoprefixer())
      .pipe(gulp.dest(config.styles.dev))
      .pipe(server.instance.stream());
  },

  build: () => {
    return gulp.src(config.styles.src)
      .pipe(sourcemaps.init())
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(cssconcat(config.styles.outputFileName))
      .pipe(autoprefixer())
      .pipe(cssnano())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.styles.dev));
  }
}
