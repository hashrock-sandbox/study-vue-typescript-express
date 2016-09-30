module.exports = {
  entry: ['./main.ts'],
  output: {
    path: '../public/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {test: /\.ts(x?)$/, loader: 'ts-loader'},
      {
        test: /\.less$/,
        loader: "style!css?-url!less"
      },
      {
        test: /\.html$/,
        loader: "html"
      }      
    ]
  }
};