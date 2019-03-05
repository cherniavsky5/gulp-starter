const gulp = require('gulp');

const config    = require('./gulp/config');
const server    = require('./gulp/tasks/server');
const templates = require('./gulp/tasks/template/compile');
const data      = require('./gulp/tasks/template/data');
const validator = require('./gulp/tasks/template/validator');
const styles    = require('./gulp/tasks/styles/compile');

gulp.task('server', server.init);
gulp.task('html:compile', templates);
gulp.task('html:validate', validator);
gulp.task('html:data', data);
gulp.task('css:dev:compile', styles.dev);


gulp.watch(config.templates.src, gulp.series('html:compile'));
gulp.watch(config.data.src, gulp.series('html:data', 'html:compile'));
gulp.watch(config.templates.html, gulp.series('html:validate'));
gulp.watch(config.styles.src, gulp.series('css:dev:compile'));


gulp.task('default', gulp.series('html:data', gulp.parallel('html:compile', 'css:dev:compile'), 'server'));
