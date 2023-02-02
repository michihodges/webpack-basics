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

## Webpack Entry
### webpack.config.js
Add entry:
```js
module.exports = {
    entry: './src/client/index.js'
}
```
### src/client/index.js
Add test content:
```js
alert('I exist!')
```
### Run Webpack
```
npm run build
```
The result should be a dist folder containing a main.js file with the `alert('I exist!')` showing at the end:
```js
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){alert("I exist!")}]);
```
Delete `dist` folder before after observing output and before running webpack again.

## Webpack Loaders
### Install Babel
```
npm i -D --legacy-peer-deps @babel/core@^7.13.15 @babel/preset-env@^7.13.15 babel-loader@^8.2.2
```
### Configure Babel
#### .babelrc
Create a .babelrc file in the project root:
```
touch .babelrc
```
Add the following code:
```js
{ "presets": ["@babel/preset-env"] }
```
#### webpack.config.js
Add the following code under `entry`:
```js
module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
```
#### index.html
Replace:
```html
<script type="text/javascript" src="/js/nameChecker.js"></script>
<script type="text/javascript" src="/js/formHandler.js"></script>
```
With:
```html
<script type="text/javascript" src="../../../dist/main.js"></script>
```
#### Import and Export
##### src/client/index.js
Import formHandler.js and nameChecker.js
```js
import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkForName);

alert("I EXIST")
```
##### formHandler.js
Export from formHandler.js
```js
export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:3000/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}
```
##### nameChecker.js
Export from nameChecker.js
```js
export function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}
```

## Webpack Plugins
Install html webpack plugin:
```
npm install -D --legacy-peer-deps html-webpack-plugin@3.2.0
```
Require the plugin with the other dependencies required at the top of the webpack config:
```
const htmlWebpackPlugin = require("html-webpack-plugin")
```
Add a `plugins` list under the `modules` object to the webpack config and instantiate the plugin:
```js
plugins: [
    new htmlWebpackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html"
    })
]
```
Run webpack and observe the new dist folder output:
```
npm run build
```
The result should be a dist folder with an index.html and main.js file. The index.html file should have the main.js file dynamically added at the end.</br>
Update your server file. Change the home route to use the index file from dist:
```js
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
```
Update your server file to look for asset files in the dist instead of client.</br>
Change:
```js
app.use(express.static('src/client'))
```
To:
```js
app.use(express.static('dist'))
```
Run the server.

## Webpack Mode
### webpack.config.js
Create a copy of the `webpack.config.js` file and rename it `webpack.prod.js`.</br>
Add `mode: production` at the top of `module.exports`.</br>
Rename `webpack.config.js` to `webpack.dev.js` and add the following code at the top of `module.exports`:
```js
module.exports = {
    mode: 'development',
    devtool: 'source-map',
}
```
### package.json
Replace `"build": "webpack"` with:
```js
"build-prod": "webpack --config webpack.prod.js",
"build-dev": "webpack --config webpack.dev.js --open"
```
### Run Modes
Run replaced scripts respectively and observe differences generated in the `dist` folder:
```
npm run build-prod
```
```
npm run build-dev
```
The result should be that development mode should additionally have a `main.js.map` file and code in the `main.js` file should be 'prettified', that is, formatted so that someone can read it more easily.</br>
Delete `dist` folder before after observing output and before running modes again.

## Convenience
### Webpack Dev Server
Webpack Dev Server hot reloads the page and automatically re-builds the app when in development mode.</br>
Install Webpack Dev Server:
```
npm i -D --legacy-peer-deps webpack-dev-server@3.11.2
```
### Clean Webpack Plugin
Notice that we have deleted the `dist` folder manually each time after running the `npm run build` or `npm run build-dev` command. With the Clean Webpack Plugin, it efficiently only rebuilds the files where changes have been made.
Install Clean Webpack Plugin:
```
npm i -D --legacy-peer-deps clean-webpack-plugin@3.0.0
```
Alternatively, you can go really low tech by simply editing the build script and blanket delete the `dist` folder every time:
```js
rm -rf dist && webpack-dev-server  --config webpack.dev.js --open
```
