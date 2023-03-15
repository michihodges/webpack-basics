# Webpack Plugins
While loaders transform similar file types into optimised assets, plugins do everything else, from automatically adding asset references to an HTML file (dynamically adding links) to hot loading (automatically updating) a local development server when changes have been made. Below are a set of instructions on how to setup and implement the html-webpack-plugin responsible for automatically adding the `./dist/main.js` to the HTML document. 

## Install HTML Webpack Plugin:
Install html-webpack-plugin:
```
npm install -D --legacy-peer-deps html-webpack-plugin@3.2.0
```

## Configure HTML Webpack Plugin:
`require()` the plugin with the other dependencies required at the top of the webpack config:
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

## Run Webpack
Run the build command in the CLI:
and observe the new dist folder output
```
npm run build
```
The result should be a `dist` folder with an `index.html` and `main.js` file inside of it. The index.html file should have the main.js file dynamically added at the end.

## Run Server
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

## Return to Main
[Main Branch](https://github.com/michihodges/webpack-basics)