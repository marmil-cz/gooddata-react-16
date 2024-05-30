const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.*', '.js', '.jsx'],
        alias: {
            "react/jsx-runtime": "react/jsx-runtime",
        }
    },
    output: {
        path: path.resolve(__dirname, './docs'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname, './docs'),
        hot: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            TOKEN: JSON.stringify(process.env.TOKEN),
            HOST: JSON.stringify(process.env.HOST),
            WORKSPACE: JSON.stringify(process.env.WORKSPACE),
            VISUALIZATION: JSON.stringify(process.env.VISUALIZATION),
            DASHBOARD: JSON.stringify(process.env.DASHBOARD),
            WORKSPACE_2: JSON.stringify(process.env.WORKSPACE_2),
            VISUALIZATION_2: JSON.stringify(process.env.VISUALIZATION_2),
            DASHBOARD_2: JSON.stringify(process.env.DASHBOARD_2),
        }),
    ]
};
