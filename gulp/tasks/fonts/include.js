const config = require('../../config');

const gulp  = require('gulp');
const gulpFont  = require('gulp-font');

module.exports = () => {
   return gulp.src(config.fonts.dev)
     .pipe(gulpFont({
         ext: '.css',
         fontface: 'src/assets/fonts',
         relative: '/assets/fonts',
         dest: 'dist/assets/fonts',
         embed: ['woff'],
         collate: false
     }))
     .pipe(gulp.dest(config.styles.dev))
   //   .pipe(server.instance.stream());
};
