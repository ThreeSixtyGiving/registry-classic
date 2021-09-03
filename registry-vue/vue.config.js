var path = require('path');

module.exports = {
  outputDir: process.env.NODE_ENV === 'production' ? '../registry/templates/vue-build/' : 'dist',
  assetsDir: process.env.NODE_ENV === 'production' ? '../../static/vue-build/' : '',
}
