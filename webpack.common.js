const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.(txt)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
  node: {
    __dirname: false
  }
};