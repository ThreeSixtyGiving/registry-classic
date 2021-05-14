// vue.config.js
module.exports = {
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
