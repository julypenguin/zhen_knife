const webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: ["./src/index.jsx"],
    output: {
        path: __dirname + "/dist/",
        filename: "[name].[hash].js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                }
            },
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //     hmr: process.env.NODE_ENV !== 'production',
                        // },
                    },
                    //"style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            // ident: "postcss",
                            // modules: {
                            //     localIdentName: process.env.NODE_ENV !== 'production' ? '[hash:base64]' : '[path][name]__[local]',
                            // },
                            postcssOptions: {
                                plugins: [
                                    require("autoprefixer")(),
                                    require("cssnano")()
                                ]
                            }
                        }
                    },
                    "stylus-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
                loader: "file-loader",
                options: {
                    limit: 20000
                }
            },
            {
                test: /\.ico$/,
                loader: "url-loader",
                options: {
                    name: '[name].[ext]',
                    limit: 1
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //     hmr: process.env.NODE_ENV !== 'production',
                        // },
                    },
                    //"style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'Config': `${__dirname}/config.json`,
            'actions': `${__dirname}/src/actions`,
            'lib': `${__dirname}/src/lib`,
            'firebaseConfig': `${__dirname}/firebaseConfig`,
        },
        extensions: [".jsx", ".js", ".styl"]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: process.env.NODE_ENV !== 'production' ? '[id].css' : '[id].[hash].css',
        }),
        // new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template: `${__dirname}/www/index.html`,
            filename: "index.html",
            inject: "body"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            store: "store"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: `${__dirname}/copy_to_dist`, to: './' },
            ],
        }),
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    chunks: "async",
                    name: "modules",
                    minChunks: 2,
                    priority: 5
                },
                modules: {
                    test: /(react|react-dom|react-redux|react-router-dom|redux-saga)/,
                    chunks: "all",
                    name: "vendors",
                    priority: 10,
                },
                styles: {
                    test: /\.styl$/,
                    name: 'styles',
                    chunks: 'all',
                    enforce: true
                },
                cssvendors: {
                    test: /\.css$/,
                    name: 'vendors',
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    }
};


