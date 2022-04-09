# Setup React app
## with Webpack 5 and Babel instead of create React app

### Babel
#### Used Babel to transpile modern JS and JSX code back to older version of JavaScript(ES5). Need babel-core, babel-loader, @babel/preset-env and @bbel/preset-react as dev dependencies.

### Webpack
#### Used Webpack to bundle files. All the .js and .jsx code will be bundled into main.contenthash.js file. 
#### All the .css and .scss code will be bundled into main.contenthash.css file, which needs the sass, sass-loader for sass files, and css-loader, style-loader and mini-css-extract-plugin for css files.
#### Used html-webpack-plugin to set up the html template.
#### In order to enhace the cross-browser compatibility for production, postcss, postcss-loader, and postcss-preset-env would be needed.
#### To minimise the css file, we can use css-minimizer-webpack-plugin in production mode.
#### To minimise the html file, we can config html-webpack-plugin in production mode
#### For assets like image, file, and others, Webpack 5 uses Asset Modules to process them.
