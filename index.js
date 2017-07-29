var webpack = require('webpack');

var webpackConfig = require('./webpack.config');
var path = require("path");
var express = require("express");
var app = express()
var server = require('http').Server(app);

const PORT = process.env.PORT || 3000

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(webpackConfig);

var devMiddleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
})

app.use(devMiddleware)
app.use(webpackHotMiddleware(compiler))

server.listen(PORT, function(){ 
    console.log("https://localhost:"+PORT);
})
