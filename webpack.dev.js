const { merge } = require('webpack-merge'),
    webpack = require('webpack'),
    common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: './dist',
        port: 777,
        historyApiFallback: true,
        hot: true,
        client: { overlay: false },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
})
