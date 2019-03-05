const browserSync = require('browser-sync').create();

function server() {
    browserSync.init({
        server: {
            baseDir: 'dev'
        }
    });
}

module.exports = server;
