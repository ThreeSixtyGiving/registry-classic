var path = require('path');

module.exports = {
  outputDir: process.env.NODE_ENV === 'production' ? '../registry/templates/' : 'dist',
  assetsDir: process.env.NODE_ENV === 'production' ? '../static/' : '',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      module.exports = {
        module: {
          rules: [
            {
              test: /\.scss$/,
              use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
              ]
            }
          ]
        },
        // plugin omitted
      }
    }
  }
}
