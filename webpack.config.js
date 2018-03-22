const webpack = require('webpack');

const config = {
	context: `${__dirname}/src/`,
	entry: {
		'bootstrap': './bootstrap.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'stage-2'],
				},
			},
		],
	},
	resolve: {
		modules: [`${__dirname}`, 'node_modules'],
	},
	output: {
		path: `${__dirname}/dist/scripts`,
		filename: '[name].min.js',
	},
	plugins: [],
};

module.exports = config;