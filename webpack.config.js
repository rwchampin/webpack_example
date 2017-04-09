var webpack = require('webpack');
var ETP = require("extract-text-webpack-plugin");
const path = require('path');
var webpackConfig = {
    entry: "./js/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: '/node_modules',
                loader: "babel-loader",
                query: {
                    presets:['es2015']
                }
            },
            {
                loader: ETP.extract('css-loader!sass-loader'),
                test: /\.scss$/
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            }
        ]

    },
    plugins: [
        new ETP('bundle.css')
    ]
};

module.exports = webpackConfig;