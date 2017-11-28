const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const project = require('./project.config.js');
const __DEV__ = project.env === 'development';
const __PROD__ = project.env === 'production';

module.exports = {
    entry: {
        main: path.resolve(project.basePath, 'src', 'index.js'),
        vendor: ['react', 'redux', 'react-router', 'lodash']
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.resolve(project.basePath, 'dist'),
        publicPath: project.publicPath,
        sourceMapFilename: '[name].map'
    },
    module: {
        rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(jpg|png)$/,
				loader: 'url-loader'
			},
			{
                test: /\.js$/,
                loaders: ['babel-loader'],
                include: path.resolve(project.srcDir),
			}
		]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
        new webpack.DefinePlugin(Object.assign({
            'process.env': {NODE_ENV: JSON.stringify(project.env)},
            __DEV__,
            __PROD__,
        }, project.globals)),
        new HtmlWebpackPlugin({
            template: path.resolve(project.srcDir, 'index.html'),
            inject: true,
            minify: {
                collapseWhitespace: true,
            },
        })
    ]
};
