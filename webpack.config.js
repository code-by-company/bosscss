const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSASS = new ExtractTextPlugin({ filename: 'boss.css' })

module.exports = {
    mode: "development",
    watch: true,
    entry: './src/js/app.js',    
    devtool: "cheap-eval-source-map",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 9000
    }
};