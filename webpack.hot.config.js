var webpack = require('webpack');
var port = 8291;

module.exports = {
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:' + port + '/',
            'webpack/hot/only-dev-server',
            './index.js'
        ]
    },
    output: {
        filename: '[name].js',
        path: './dist/',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: [/node_modules/]
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
                exclude: [/node_modules/]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: port,
        hot: true
    }
};