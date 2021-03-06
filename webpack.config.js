const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
        rules: [
          {
            test: /\.css$/,
           use: [
              'style-loader',
              'css-loader'
            ]
          },
      {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader'
               ]
              }
            ]
          },
          module: {
            rules: [
              {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
              }
            ]
          }
      };








