const path=require('path');

module.exports={
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader","sass-loader"],
              },
              {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    },
                  },
                ],
              },
        ]
    },
  
    devServer: {
        historyApiFallback: true,
        hot:true,
        // contentBase: path.join(__dirname, 'public')
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    
    ]
}