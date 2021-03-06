var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var locationConfig = require('../config/location.config');

module.exports = {
    entry: path.join(locationConfig.client.src, 'index.jsx'),
    output: {
        path: locationConfig.client.dist.location,
        filename: 'js/bundle.js',
        publicPath: locationConfig.publicPath
    },
    resolve: {
        extensions: ['', '.jsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                },
                include: locationConfig.client.src
            },
            {
                test: /(\.scss|\.css)$/,
                loader: ExtractTextPlugin.extract('style', [
                    'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss',
                    'sass'
                ])
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ]
};
