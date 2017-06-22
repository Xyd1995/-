const path = require('path');
const HtmlEntry = require('./build/xyd.js')
const htmlWebpackPlugin = require('html-webpack-plugin');
const xyd = require('./build/xyd.js');
const config = {
	context: path.resolve(__dirname, 'src'),
	entry: HtmlEntry.xydEntry,
	output: {
		filename: '[name].[hash:20].js',
		path:path.resolve(__dirname, 'dist')
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude: /(node_modules|bower_components)/,
				use:[
					{
						loader:"babel-loader"
					}
				]
			},
			{
				test:/\.html$/,
				use:[
					{
						loader:"html-loader",
						options: {
							minimize:true				
						}
					}					
				]
			}
		]
	},
	plugins:[
	]
};



var xydArray = Object.keys(xyd.xydEntry).map(function(el){
	return el
});
xydArray.forEach(function(item){
	var xydConf = {
		filename: './'+item+'.html',
		template: './'+item+'.html',
		chunks:[item],
		inject:true,
		hash:true
	}
	config.plugins.push(new htmlWebpackPlugin(xydConf));
});

module.exports = config;