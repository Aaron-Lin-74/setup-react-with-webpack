const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { NONAME } = require('dns');

module.exports = {
  // This tells webpack what version js it is going to result
  target: ['web', 'es5'],

  //This property defines where the application starts
  entry: './src/index.js',

  // This saves us from having to add a mode flag when we run the development server.
  mode: 'development',

  // For easier debugging
  devtool: 'source-map',

  // Config the dev server
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,

    // Move the command flag here as well
    // Tells dev-server to open the browser after server had been started.
    open: true,

    // Enable webpack's Hot Module Replacement
    hot: true,

    // Enable gzip compression for everything served
    compress: true,

    // Allows to proxy requests through a specified index page.
    // Useful for Single Page Applications that utilise the HTML5 History API.
    historyApiFallback: true,
  },
  // This property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    path: path.resolve(__dirname, 'dist'),

    // Add content hash to avoid browser caching
    filename: 'bundle.[contenthash].js',

    // Clean the dist folder before each build
    clean: true,

    // Maintain the original name of asset
    assetModuleFilename: 'images/[name][ext][query]',
  },

  //Setup loaders
  module: {
    rules: [
      // First rule is all about transforming ES6 and JSX syntax
      {
        // The test and exclude/include properties are conditions to match file against.
        test: /\.(js|jsx)$/,

        // exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),

        // We can optionally move preset rules from .babelrc to here
        use: {
          loader: 'babel-loader',
        },
      },

      // Second rule is about processing css file
      {
        test: /\.css$/i,

        // Loaded in reverse order
        use: ['style-loader', 'css-loader'],
      },

      // The rule about processing scss file
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',

          // Translates CSS into CommonJS
          'css-loader',

          // Compiles Sass to CSS
          'sass-loader',
        ],
      },

      // The rule for images, using Asset Module
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
