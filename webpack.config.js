const path = require('path'); //Nos permite acceder a la ubicación de nuestras carpetas
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js'],  //Extenciones a utilizar en el proyecto
  },
  module: {
    rules: [  //Reglas a usar en el proyecto para el funcioanmiento de nuestro proyecto
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [  //Plugins a utilizar en el proyecto
    new HtmlWebpackPlugin(   //Para el uso de html
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ),
    new CopyPlugin({
      patterns: [
        { from: './src/styles/styles.css', to: '' },
      ]
    })
  ],
}