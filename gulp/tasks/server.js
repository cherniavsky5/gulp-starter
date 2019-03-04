const browserSync = require('browser-sync').create();

module.exports = () => {
    browserSync.init({
        server: {
            baseDir: 'dev'
        }
    });
};
