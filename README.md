# Webpack Plugins
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