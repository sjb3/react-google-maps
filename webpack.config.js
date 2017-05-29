var webpack = require("webpack");
var path = require('path');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {

	entry: {
		app: './src/App.js'
	},
	output: {
		filename: 'build/bundle.js',
        sourceMapFilename: 'build/bundle.map'
	},
	devtool: '#source-map',
	plugins: [
      new DashboardPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			}
		]
	}
}
