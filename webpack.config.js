const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    app: path.resolve(__dirname, "./src/main.js"),
    App1: path.resolve(__dirname, "./src/page/App1.js")
  },
  output: {
    path: path.resolve(__dirname, "./dist"), // 输出的路径
    filename: "[name].js" // 打包后文件
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: "8081"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader" //css兼容前缀
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    // 使用devServer编译后会删掉dist输出目录
    new CleanWebpackPlugin(["dist"]),
    // 将css/scss单独打包一个文件
    new ExtractTextPlugin({
      filename: "[name].css",
      disable: false,
      allChunks: true
    }),
    // 使用模板
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  watchOptions: {
    poll: 1000, //监测修改的时间(ms)
    // aggregeateTimeout: 1000, //防止重复按键，500毫米内算按键一次
    ignored: /node_modules|dist/ //不监测
  }
};
