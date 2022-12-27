const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //modulo para injectar html en la carpeta dist y no tener que importar el js al html

module.exports = {
  stats: { children: true },
  context: path.resolve(__dirname, './src'),
  resolve: {
    extensions: ['.js', 'ts', '.tsx'],
  },
  entry: {
    app: './index.tsx',
    styles: ['./main.scss'],
  },
  output: {
    filename: '[name].[chunkhash].js', //crea un hash por archivo y evitamos problemas de cache
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      //los use: sirven para cargar + de un loader, se cargan de dcha a izq.
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
  ],
};
