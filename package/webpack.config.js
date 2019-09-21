const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: ["style-loader","css-loader","less-loader"]
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: path.resolve(__dirname, 'dist/build/index.html')
		})
	],
	devServer: {
		host: '0.0.0.0',
		port: 8080
	}
}