var webpack = require("webpack");
var merge = require("webpack-merge");
var base = require("./webpack.config.base");
var path = require("path");
var pkg = require("../package.json");
var globalName = "VueGscope";
module.exports = merge(base, {
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: pkg.name + ".umd.js",
		library: globalName,
		libraryTarget: "umd"
	}
});
