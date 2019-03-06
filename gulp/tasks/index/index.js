const config = require('../../config');

const gulp = require('gulp');
const pug  = require('gulp-pug');
const data = require('gulp-data');
const fs   = require('fs');

const server = require('../server');

module.exports = () => {
  return gulp.src(`${__dirname}/index.pug`)
    .pipe(data(function() {
      return JSON.parse(fs.readFileSync(config.index.data))
    }))
    .pipe(pug({
      pretty: false
    }))
    .pipe(gulp.dest(config.templates.dev))
    .pipe(server.instance.stream());
};
