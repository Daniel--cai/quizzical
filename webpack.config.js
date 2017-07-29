var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        'webpack-hot-middleware/client',
        './src/App.tsx'
        ],
    output: {
        filename: 'bundle.js',
        path: __dirname + "/dist",
        publicPath: '/'
    },
    resolve: {
        extensions: ['.tsx', 'ts', '.js', '.json']
    },
    devtool: 'source-map-loader',
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.tsx?$/, 
                loader: ['react-hot-loader/webpack','awesome-typescript-loader']
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/, 
                loader: "source-map-loader" }
        ]
    },

    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "React",
            template: './public/index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
}