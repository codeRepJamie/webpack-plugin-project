const path = require('path');
const MyWebpackPlugin = require('./src/index');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new MyWebpackPlugin()
    ],
    mode: 'development',
};