const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js', /**caminho do arquivo que esta sendo mexido */
  output: {
    filename:'main.js', //nome que vai ser o arquivo
    path:path.resolve(__dirname,'dist')//nome da pasta
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ] 
      },
      {
        test: /\.css$/i,
        use:[
          'style-loader',
          'css-loader',
        ]
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader: 'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      },
      {
        test:/\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name:'[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/login.html'
    }),
    new MiniCssExtractPlugin({
      filename:'style.css'
    })
  ]
}