const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js'); // 引入公共配置
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //用于将组件的css打包成单独的文件输出到‘lib’目录中
const prodConfig = {
  mode: 'production', // 开发模式
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    path: path.join(__dirname, "../lib/"),
    filename: "index.js",
    libraryTarget: 'umd',  // 采用通用模板定义
    libraryExport: 'default', // 兼容 ES6 的模板系统、CommonJS和AMD模块规范
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader?modules']
      },
      {
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.min.css" // 提取后的css文件名
    })
  ],
  //定义外部依赖，避免把react和react-dom打包进去
  externals: { 
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDom",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  },
}

module.exports = merge(prodConfig, baseConfig); // 将baseConfig和baseConfig合并为一个配置