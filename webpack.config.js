const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = [
  {
    mode: "development",    
    target: "electron-renderer",
    plugins: [
      new HtmlWebpackPlugin({
        
      })
    ]  
    
  }
];
