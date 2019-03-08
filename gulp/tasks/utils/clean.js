const config = require('../../config');

const gulp = require('gulp');
const del  = require('del');

module.exports = {
  dev() {
    return del([
      config.baseDir
    ]);
  }
};
