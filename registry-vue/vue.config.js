const fetch = require('node-fetch');

module.exports = {
  devServer: {
    before: function(app, server) {
      app.get('/data.json', async function(req, res) {
        fetch("https://data.threesixtygiving.org/data.json", { method: "GET" })
          .then(res => res.json())
          .then((json) => {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(json));
          });
      });
    }
  },
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
