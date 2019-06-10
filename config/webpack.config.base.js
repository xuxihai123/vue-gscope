var webpack = require("webpack");
var config = require("../package.json");
module.exports = {
	entry: "./src/index.js",
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			VERSION: JSON.stringify(config.version)
		}),
		new webpack.ProvidePlugin({})
	],
	externals: {
		vue: {
			root: "Vue",
			commonjs: "vue",
			commonjs2: "vue",
			amd: "vue"
		}
	}
};
