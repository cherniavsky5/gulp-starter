module.exports = {
  baseDir: 'dev',

  templates: {
    src: 'src/pages/**/*.pug',
    dev: 'dev',
    dist: 'dist',
    html: 'dev/**/*.html'
  },

  styles: {
    src: 'src/assets/scss/**/*.scss',
    dev: 'dev/css',
    dist: 'dist/css',
    outputFileName: 'main.min.css'
  },

  data: {
    fileName: 'data.json',
    src: 'src/data/**/*.json',
    dev: 'dev/temp'
  }
};
