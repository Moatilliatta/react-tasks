const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const buildName = 'dev-build';

const javascriptRules = {
	test: /\.jsx?$/, // All JS and JSX 
	exclude: /node_modules/, // Avoid node_modules
	use: {
		loader: 'babel-loader', // Use this loader
		options: { // Loader's options
			presets: ['@babel/preset-react', '@babel/preset-env']
		}
	}
};

const sassRules = [
	{
	  test: /\.module\.s(a|c)ss$/,
	  loader: [
	    'style-loader',
	    {
	      loader: 'css-loader',
	      options: {
	        modules: true,
	        sourceMap: true
	      }
	    },
	    {
	      loader: 'sass-loader',
	      options: {
	        sourceMap: true
	      }
	    }
	  ]
	},
	{
	  test: /\.s(a|c)ss$/,
	  exclude: /\.module.(s(a|c)ss)$/,
	  loader: [
	    'style-loader',
	    'css-loader',
	    {
	      loader: 'sass-loader',
	      options: {
	        sourceMap: true
	      }
	    }
	  ]
	}
];

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'result.js',
		path: path.resolve(__dirname, buildName)
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json', '.scss']
	},

	module: {
		rules: [ javascriptRules, ...sassRules ]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'From HtmlWebpackPlugin',
			template: 'src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	],

	devServer: {
		contentBase: path.resolve(__dirname, buildName),
		compress: true
	}
}