'use strict'

const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const webpack = require('webpack/lib/optimize/UglifyJsPlugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      { 
        test: /\.json$/,
        loader: 'file-loader'
    },
      {
           test: /\.js$/,
           include: [ // use `include` vs `exclude` to white-list vs black-list
           path.resolve(__dirname, "src"), // white-list your app source files
           require.resolve("bootstrap-vue"), // white-list bootstrap-vue
           ],
                loader: "babel-loader"
      },

  

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [

/*
  new CommonsChunkPlugin({
      name: 'commons',
      chunks: ['app','vendor','main']
    }),
   new webpack({
            sourceMap: true,
            compress: {
                warnings: false
            }
        })*/




  ]
}
