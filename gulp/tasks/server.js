const config = require('../config');

const browserSync = require('browser-sync').create();

function server() {
    browserSync.init({
        server: {
            baseDir: config.baseDir
        }
    });
}

module.exports = {
  init: server,
  instance: browserSync
};
