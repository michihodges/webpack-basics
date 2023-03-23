# Webpack
Webpack is one of the most popular build tools that bundles various modules into fewer files. Having fewer files is easier to manage and contributes to smaller file size optimizing the speed of your website. Speed is the bottom line of any website, because no one likes loading times or waiting for assets to fully load. An example project has been provided in the form of a project folder to assist the understanding of where various files and folders need to be. When installing Webpack, it's a good idea to install Webpack-CLI as well as, because it runs Webpack in the Command Line. The versions are crucial for compatibility, which is why they have been specified as well as implemented with the `--legacy-peer-deps` command. Below are a set of instructions on how to set up Webpack: 

## Initial Setup
The file structure can be found at the top of this GitHub repository with an example project to work with. It is important to remember that Node based files including the config file is in the project root and not in the project folder which in this case is anything inside the `src` folder.

## Installation
Install Webpack and Webpack-CLI:
```
npm i --legacy-peer-deps webpack@4.35.3
npm i --legacy-peer-deps webpack-cli@3.3.5
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
Run the build command: 
```
npm run build
```

## Review
Webpack has been installed and configured to the point that it can be run in the command line. Don't worry - there will be an error, because the config file is still empty and requires more configuration which will be covered in the next branch ;)

## [Main Branch](https://github.com/michihodges/webpack-basics)
## [Next Branch](https://github.com/michihodges/webpack-basics/tree/04-webpack-entry)
