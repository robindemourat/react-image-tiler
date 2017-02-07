const path = require('path')
const webpack = require('webpack')
const paths = {
    app: path.join(__dirname, 'example'),
    build: path.join(__dirname, 'example')
}

const config = {
    entry: {
        app: paths.app + '/index.jsx',
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    output: {
        path: paths.build,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: ['babel-loader'],
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            }
        ]
    }
}

module.exports = config
