const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    context: resolve(__dirname, 'src'),
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: ['file-loader?hash=sha512&digest=hex&name=assets/images/[hash].[ext]']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/fonts/'
                    }
                }
            }
        ]
    }
};
