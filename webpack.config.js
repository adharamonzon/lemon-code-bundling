const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //modulo para injectar html en la carpeta dist y no tener que importar el js al html
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //modulo para limpiar la carpeta dist y no ir acumulando archivos

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
    appStyle: './main.scss',
  },
  output: {
    filename: '[name].[chunkhash].js', //crea un hash por archivo y evitamos problemas de cache
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      //los use: sirven para cargar + de un loader, se cargan de dcha a izq.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      scriptLoading: 'blocking', //modo de carga del template
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    // static: path.join(__dirname, './src'),
  },
};
