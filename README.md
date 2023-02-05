# Webpack
## Installation

Install Webpack, Webpack-cli and Webpack-dev-server.
```
npm i --legacy-peer-deps webpack@4.35.3
npm i --legacy-peer-deps webpack-cli@3.3.5
```

## Configuration
### package.json
Add build command to package.json:
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
### Run Webpack
Test Webpack by running the build command in the CLI: 
```
npm run build
```
Don't worry - there will be an error ;)