module.exports = {
  baseDir: 'dev',
  distDir: 'dist',

  index: {
    data: 'src/index.json'
  },

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

  fonts: {
    src: 'src/assets/fonts/**/*',
    dev: 'dev/fonts'
  },

  data: {
    fileName: 'data.json',
    src: 'src/data/**/*.json',
    dev: 'dev/temp'
  }
};
