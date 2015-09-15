var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var port = 8190;

module.exports = {
    entry: {app: './index.js'},
    output: {
        filename: '[name].js',
        path: './dist/',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
                exclude: [/node_modules/]
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
                exclude: [/node_modules/]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./dist/[name].css')
    ],
    devServer: {
        port: port
    }
};