
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractCSS = new ExtractTextPlugin('public/css/styles.css');

config = {

    entry: {
        entry: ['whatwg-fetch'],
        filename: "./src/app.jsx",
    },

    output: {
        filename: "./public/dist/app.bundle.js",
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query:{
                presets:['es2015', 'react']
            }
        },
        {  
            test: /\.scss$/i,
            loader: extractCSS.extract(['css','sass'])
        },
        ],
    },

    plugins: [
        extractCSS,
        new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

module.exports = config;