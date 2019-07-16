const path = require('path');
const fs = require("fs");
const webpack = require("webpack");
const nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  });
module.exports = {
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  node: {
    fs: 'empty',
    child_process: 'empty',
    tls: 'empty',
    net: 'empty'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
//   watch: true,
  target: 'node',
  externals: nodeModules,
//   plugins: [
//     new webpack.HotModuleReplacementPlugin()
//   ]
};