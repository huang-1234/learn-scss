// webpack.config.js
module.exports = {
  module: {
    rules: [{
      test: /.scss$|.sass$/,
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