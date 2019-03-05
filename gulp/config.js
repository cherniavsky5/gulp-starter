module.exports = {
  baseDir: 'dev',

  templates: {
    src: 'src/pages/**/*.pug',
    dev: 'dev',
    dist: 'dist'
  },

  data: {
    fileName: 'data.json',
    src: 'src/data/**/*.json',
    dev: 'dev/temp'
  }
};
