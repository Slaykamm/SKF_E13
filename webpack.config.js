const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        open: true,
        port: 3001,
        static: './dist', 
        
        hot: true
        
      },
    output: {
        filename: 'main.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
          title: 'Hot Module Replacement',
        }),
      ],

    module: {
        rules: [
            {
                test: /\.js*/,
                exclude: '/node_modules/',
                use: 'eslint-loader'
            }
        ]


      }

}