var webpack = require("webpack");
var path = require('path');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {

	entry: {
		app: './public/app/App.js'
	},
	output: {
		filename: 'public/build/bundle.js',
        sourceMapFilename: 'public/build/bundle.map'
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
