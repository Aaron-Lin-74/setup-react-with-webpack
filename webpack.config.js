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

  //This property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    path: path.resolve(__dirname, 'dist'),

    // Add content hash to avoid browser caching
    filename: 'bundle.[contenthash].js',

    // Clean the dist folder before each build
    clean: true,
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
    ],
  },

  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
