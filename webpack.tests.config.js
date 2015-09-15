var webpack = require('webpack');
var RewirePlugin = require('rewire-webpack');

var port = 8192;

module.exports = {
    entry: {
        'test.01': 'mocha!./01-basics/queue.test.js',
        'test.02': 'mocha!./02-spies-and-stubs/streamController.test.js',
        'test.03': 'mocha!./03-react/index.test.js',
        'test.04': 'mocha!./04-di/playerApp.test.js'
    },
    output: {
        filename: '[name].js',
        path: 'tests/',
        publicPath: '/tests/'
    },
    module: {
        noParse: [/sinon/],
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: [/node_modules/]
            },
            {
                test: /(\.css|\.less)$/,
                loader: 'null-loader'
            },
            {
                test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
                loader: 'null-loader'
            }
        ]
    },
    plugins: [
        new RewirePlugin(),
        new webpack.NormalModuleReplacementPlugin(/sinon/, __dirname + "/lib/sinon-1.16.1.js")
    ],
    devServer: {
        port: port
    }
};