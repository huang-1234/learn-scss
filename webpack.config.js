// webpack.config.js
module.exports = {
  module: {
    rules: [{
      test: /.scss$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "scss-loader",
          options: {
            scssOptions: {
              strictMath: true,
              noIeCompat: true
            }

          }
        }
      ]
    }]
  },
};