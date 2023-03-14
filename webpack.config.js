const path = require("path")
const webpack = require("webpack")
module.exports = {
    entry: './src/client/index.js', // Make sure to add a comma before the next line of code
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}