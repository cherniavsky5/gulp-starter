const gulp = require('gulp');

const clean     = require('./gulp/tasks/utils/clean');
const config    = require('./gulp/config');
const server    = require('./gulp/tasks/server');
const templates = require('./gulp/tasks/template/compile');
const data      = require('./gulp/tasks/template/data');
const validator = require('./gulp/tasks/template/validator');
const styles    = require('./gulp/tasks/styles/compile');
const fonts     = require('./gulp/tasks/fonts/compile');
const fontsInclude     = require('./gulp/tasks/fonts/include');
const index     = require('./gulp/tasks/index/index');

gulp.task('clean:dev', clean.dev);

gulp.task('server', server.init);

gulp.task('index', index);

gulp.task('html:compile', templates);
gulp.task('html:validate', validator);
gulp.task('html:data', data);

gulp.task('css:dev:compile', styles.dev);

gulp.task('fonts:compile', fonts);
console.log(fontsInclude)
gulp.task('fonts:include', fontsInclude);


gulp.watch(config.templates.src, gulp.series('html:compile'));
gulp.watch(config.data.src, gulp.series('html:data', 'html:compile'));
gulp.watch(config.templates.html, gulp.series('html:validate'));
gulp.watch(config.styles.src, gulp.series('css:dev:compile'));
gulp.watch(config.index.data, gulp.series('index'));


gulp.task('default', gulp.series('clean:dev', 'html:data', gulp.parallel('index', 'html:compile', 'css:dev:compile', 'fonts:compile'), 'fonts:include', 'server'));
