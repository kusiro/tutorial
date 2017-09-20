const path = require('path');
const webpack = require('webpack');


module.exports = {
      entry: './src/main.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
     },
     module: {
         rules: [{
                 test: /\.html$/,
                 loader: 'html-loader',
             }, {
                 test: /\.(css|scss)$/,
                 use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                 ]
             }, {
                 test: /\.(png|svg|jpg|gif)$/,
                 loader: 'file-loader',
             }
         ]
     },
     devServer: {
         inline: true,
         hot: true,
         compress: true,
     },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};
