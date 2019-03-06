const config = require('../../config');

const gulp  = require('gulp');
const fonts = require('@wandiparis/gulp-fonts');

const server = require('../server');


module.exports = fonts({
   src: config.fonts.src,
   dest: config.fonts.dev
});
