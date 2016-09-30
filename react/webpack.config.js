var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
// 定義一些文件夾的路徑
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  // 以app.js為進入點
  entry: __dirname + '/js/com.js',
  /* file-loader
  entry: {
    javascript: __dirname + 'index.js',
    html: __dirname + 'index.html'
  }, */
  // 輸出目錄和檔案名
  output: {
    publicPath: '/',
    filename: './js/bundle.js'
  },
  // 不同的模塊處理各種類型的文件
  module: {
    loaders: [{
        // 只針對js與jsx檔案
        test: /\.jsx?$/,
        // 只包含'src'目錄
        // include: [
        //   __dirname + "/src"
        // ],
        exclude: /node_modules/,
        // 也可以使用'babel-loader'
        loader: 'babel',
        // 其他設定preset或plugin
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }, {
        // css樣式
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      },
      /* file-loader
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }, */
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
