# Webpack Basics
A walkthrough for setting up Webpack for an Express based app.</br></br>

Checkout [01-node](https://github.com/michihodges/webpack-basics/tree/01-node) if you need to install and setup Node.js.</br>
Checkout [02-express](https://github.com/michihodges/webpack-basics/tree/02-express) if you need to install and setup Express.</br>
Checkout [03-webpack](https://github.com/michihodges/webpack-basics/tree/03-webpack) if you need to install and setup Webpack.</br>
Checkout [04-webpack-entry](https://github.com/michihodges/webpack-basics/tree/04-webpack-entry) if you need to setup and test your Webpack entry.

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
