# Webpack
Webpack is one of the most popular build tools that bundles modules into fewer files and thereby optimising file size. File size is important, because the smaller they are the faster your web app is and essentially the better google will rank it. 

## Initial Setup

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
