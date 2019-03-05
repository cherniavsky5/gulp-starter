const config = require('../../config');

const gulp  = require('gulp');
const path  = require('path');
const merge = require('gulp-merge-json');

function dataJSON() {
  return gulp.src(config.data.src)
    .pipe(merge({
      fileName: config.data.fileName,
      edit: (json, file) => {
        // Extract the filename and strip the extension
        var filename = path.basename(file.path),
            primaryKey = filename.replace(path.extname(filename), '');

        // Set the filename as the primary key for our JSON data
        var data = {};
        data[primaryKey.toUpperCase()] = json;

        return data;
      }
    }))
    .pipe(gulp.dest(config.data.dev));
}

module.exports = dataJSON;
