const gulp = require('gulp');
const server = require('./gulp/tasks/server');

gulp.task('default', gulp.series(server));
