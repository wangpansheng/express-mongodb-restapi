const webpack = require('webpack');
const path = require('path');

module.exports = {
  // 入口
  entry: path.join(__dirname, 'src', 'index'),
  // 输出目录
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'app.js',
    // 静态资源文件引用时的路径（加在引用静态资源前面的）
    // publicPath: path.resolve( __dirname, './public/' )
  },
  // resolve 指定可以被 import 的文件后缀。比如 Hello.jsx 这样的文件就可以直接用 import Hello from 'Hello' 引用。
  resolve: {
    extensions: ['.jsx','.js','.json','.less',".css"]
  },
  module: {
    rules: [
      {
        // test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'env', 'react' ]
        }
        // use 属性，表示进行转换时，应该使用哪个 loader
        // use: [
        //   { loader: 'babel-loader' },
        //   // { options:  }
        // ]
      }
    ],
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin(),
  // ],
  // 通过选择 development 或 production 之中的一个，来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化
  mode: 'development'

};