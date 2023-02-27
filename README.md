# Webpack
Webpack is one of the most popular build tools that bundles various modules into fewer files. Having fewer files is easier to manage and contributes to smaller file size optimizing the speed of your web app. Speed is the bottom line of any web app, because no one likes loading times or waiting for assets to fully load. When installing Webpack, it's a good idea to install Webpack-CLI as well as Webpack-Dev-Server, because with Webpack-CLI Webpack can be run in the Command Line and Webpack-Dev-Server is another server that is used for testing. Again, the versions are crucial for compatibility.

## Initial Setup
As with the previous branch 02-express, the file structure can be found at the top of this GitHub repository with an example project to work with. It is important to remember that server based files including webpack.config.js is in the project root and not in the project folder which in this case is anything inside the `src` folder.

## Installation
Install Webpack, Webpack-cli and Webpack-dev-server.
```
npm i --legacy-peer-deps webpack@4.35.3
npm i --legacy-peer-deps webpack-cli@3.3.5
npm i --legacy-peer-deps --save-dev webpack-dev-server@3.11.2
```

## Configuration
### package.json
Add the build command to package.json:
```js
"scripts": {
    "build": "webpack"
}
```

### webpack.config.js
Create a webpack.config.js file in the project root:
```
touch webpack.config.js
```
Add the following code:
```js
const path = require("path")
const webpack = require("webpack")
module.exports = {
}
```
## Run Webpack
Run the build command in the CLI: 
```
npm run build
```
Don't worry - there will be an error, because the config file is still empty ;)

## [Return to Main](https://github.com/michihodges/webpack-basics)
