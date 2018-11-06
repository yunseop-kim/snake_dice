const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        hotOnly: true,
        stats: 'errors-only'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Snake Dice Game',
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};