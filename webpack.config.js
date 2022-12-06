const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //modulo para injectar html en la carpeta dist y no tener que importar el js al html
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //modulo para limpiar la carpeta dist y no ir acumulando archivos

module.exports = {
  context: path.resolve(__dirname, './src'),
  resolve: {
    extensions: ['.js', 'ts', '.tsx'],
  },
  entry: {
    app: './index.tsx',
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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalConvention: 'camelCase',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                localIdentContext: path.resolve(__dirname, 'src'),
              },
            },
          },
        ],
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
  devtool: 'eval-source-map',
  devServer: {
    // static: path.join(__dirname, './src'),
    devMiddleware: {
      stats: 'errors-only',
    },
  },
};
