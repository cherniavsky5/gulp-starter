const gulp = require('gulp');
const server = require('./gulp/tasks/server');
const html = require('./gulp/tasks/html');

gulp.task('default', gulp.series(html, server));
