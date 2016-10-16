const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//Load *package.json so we can use 'dependencies from there'
const pkg = require('./package.json');

//Detect how npm is run and branch based on that
const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build'),
	style: path.join(__dirname, 'app/main.scss'),
	images: path.join(__dirname, 'app/images')
};

process.env.BABEL_ENV = TARGET;


// module.exports = {
	const common = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  	entry: {
   	app: PATHS.app,
   	style: PATHS.style
 	},
  	output: {
   	path: PATHS.build,
   	filename: '[name].js'
 	},
 	resolve: {
 		extensions: ['', '.js', '.jsx']
 	},
 	module: {
  		loaders: [
		   {
		   	exclude: /node_modules/,
		   	test: /\.js?$/,
		      loaders: ['babel?cacheDirectory'],
		      include: PATHS.app
		   },
		   {
				test: /\.(jpg|png)$/,
				loader: 'file?name=[path][name].[hash].[ext]',
				include: PATHS.images
			},
			{ test: /\.json$/, loader: "json-loader" }
		]
	},
	plugins: [
   	new HtmlWebpackPlugin({
   	title: 'T1 Tires - Wheel Come to You!',
   	template: 'template.html'
   	})
	]
};

//Default configuration. We will return this if 
//Webpack is called outside of npm.
if(TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'eval-source-map',
		devServer: {
			//Enable history API fallback so HTML5 History API based
			//routing works. This is a good default that will come
			//in handy in more complicated setups.
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,

			//Display only errors to reduce the amount of output.
			stats: 'errors-only',

			//Parse host and port from env to allow customization.
			//
			//0.0.0.0 is available to all network devices
			//unlike default localhost
			host: process.env.HOST,
			port: process.env.PORT
		},
		module: {
	  		loaders: [
	  			//Define development specific CSS setup
	  			{
	  				test: /\.scss$/,
	  				loaders: ['style', 'css', 'sass'],
	  				//Include accepts either a path or an array of paths.
	  				include: PATHS.app
	  			}
	  		]
	  	},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new NpmInstallPlugin({
				save: true // --save
			})
		]
	});
}

if(TARGET === 'build' || TARGET === 'stats') {
	module.exports = merge(common, {

		//Define vender entry point needed for splitting
		entry: {
			//Setup an entry chunk for our vender bundle.
			//You can filter out dependencies here if needed with
			// '.filter(...)'.
			vendor: Object.keys(pkg.dependencies)
		},
		externals: {
			express: "Express"
		},
		output: {
			path: PATHS.build,
			filename: '[name].[chunkhash].js',
			chunkFilename: '[chunkhash].js'
		},
		module: {
			loaders: [
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract('style', 'css!sass'),
					include: PATHS.style
				}
			]
		},
		plugins: [
			//Output extracted CSS to a file
			new ExtractTextPlugin('[name].[chunkhash].css'),
			new CleanWebpackPlugin([PATHS.build]),
			//Extract vendor and manifest files
			new webpack.optimize.CommonsChunkPlugin({
				names: ['vendor', 'manifest']
			}),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': '"production"'
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			})
		]
	});
}

