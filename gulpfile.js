const config = require('./gulp/config');

const gulp = require('gulp');

const server     = require('./gulp/tasks/server');
const templates  = require('./gulp/tasks/template/compile');
const data       = require('./gulp/tasks/template/data');
const validator  = require('./gulp/tasks/template/validator');


gulp.watch(config.templates.src, templates);
gulp.watch(config.data.src, gulp.series(data, templates));
gulp.watch(`${config.templates.dev}/**/*.html`, gulp.series(validator));

gulp.task('default', gulp.series(data, templates, server.init));
