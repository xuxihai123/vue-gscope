var webpack = require("webpack");
var merge = require("webpack-merge");
var base = require("./webpack.config.base");
var path = require("path");
var pkg = require("../package.json");
module.exports = merge(base, {
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: pkg.name + ".common.js",
		libraryTarget: "commonjs2"
	}
});
