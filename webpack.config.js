const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './indx.js',
    mode: 'development',
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.(png|svg|jpg|gif)$/i,
            use: 'file-loader',
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            } 
        }
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            path: path.resolve(__dirname, 'src'),
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.json', '.wasm']
    },
    devServer: {
        port: 3000
    },



}