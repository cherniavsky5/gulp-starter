const config = require('../../config');

const gulp = require('gulp');
const pug  = require('gulp-pug');
const data = require('gulp-data');
const fs   = require('fs');

const server = require('../server');

module.exports = () => {
  return gulp.src(config.templates.src)
    .pipe(data(function(file) {
      return JSON.parse(fs.readFileSync(`${config.data.dev}/${config.data.fileName}`))
    }))
    .pipe(pug({
      pretty: false
    }))
    .pipe(gulp.dest(config.templates.dev))
    .pipe(server.instance.stream());
}
