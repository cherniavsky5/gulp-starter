const gulp = require('gulp');
const server = require('./gulp/tasks/server');
const html = require('./gulp/tasks/html');4

console.log(html)

gulp.task('default', gulp.series(html, server));
