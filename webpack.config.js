module.exports = () => {
    const path = require('path');
    const webpack = require('webpack');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const CleanWebpackPlugin = require('clean-webpack-plugin');

    const config = {
        entry: {
            util: './src/util/index.js',
            ave: './src/ave/index.js'
        },
        output: {
            path: path.resolve(__dirname, './dist'), //输出位置
            filename: "[name].js", //输入文件
            publicPath: "xuni" //指定资源引用的目录
            library: libName,
			      libraryTarget: 'umd',
			      libraryExport: 'default',
			      umdNamedDefine: true
        },
        module: {
            rules: [{
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: [
                    path.resolve(__dirname, 'node-modules')
                ],
                loader: "babel-loader",
                options: {
                    presets: ["env", "react"]
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: [
                    path.resolve(__dirname, 'node-modules')
                ],
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: './' //postcss.config.js文件所在的目录
                        }
                    }
                }, 'less-loader']
            }, {
                test: /\.(sass|scss)$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: [
                    path.resolve(__dirname, 'node-modules')
                ],
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.jpg$/,
                loader: "file-loader"
            }, {
                test: /\.png$/,
                loader: "url-loader?mimetype=image/png"
            }, {
                test: /\.html$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: [
                    path.resolve(__dirname, 'node-modules')
                ],
                use: [{
                    loader: "html-loader",
                    options: { minimize: true }
                }]
            }]
        },
        devServer: {
            contentBase: './',
            port: '8090'
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                title: 'public-lib',
                filename: 'index.html'
            })
        ],
        watch: true
    }
    return config
}
