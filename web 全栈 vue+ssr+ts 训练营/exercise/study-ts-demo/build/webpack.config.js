const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        // 模块导入扩展名处理
        extensions: ['.js, '.ts', '.tsx'],
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/i,
            use: [{
                loader: 'ts-loader',
            }],
            exclude: /node_modules/,
        }]
    },
    plugin: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}