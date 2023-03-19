# Webpack Plugins
While loaders transform similar file types into optimised assets, plugins do everything else, from automatically adding asset references to an HTML file (dynamically adding links) to hot loading (automatically updating) a local development server when changes have been made. The plugin that will be installed is the html-webpack-plugin, which generates a separate `index.html` in the `dist` folder as well as dynamically references the `main.js` file inside of it. This is a standard plugin that is usually installed when implementing Webpack with a project, because everything in the `dist` folder is optimised for distributing and publishing on a hosting server. Below are a set of instructions on how to setup and implement the html-webpack-plugin:

## Install HTML Webpack Plugin:
Install html-webpack-plugin:
```
npm install -D --legacy-peer-deps html-webpack-plugin@3.2.0
```

## Configure HTML Webpack Plugin:
`require()` the plugin with the other dependencies required at the top of the config file:
```js
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
Run the build command:
```
npm run build
```
The result should be a `dist` folder with an `index.html` and `main.js` file inside of it. The `index.html` file should have the `main.js` file dynamically referenced inside the and at the end of the `<body>` element:

## Update Server
Although Webpack is running the way it should, the server isn't and needs reconfiguring. Update the home route to use the `index.html` file from the `dist` instead of the `src` folder:
```js
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
```
Then update the asset folder from `src` to `dist`:
```js
app.use(express.static('dist'))
```

## Run Server
Rev up the local Express server:
```
node src/server/index.js
```
The console should print:
```
Example app listening on port 8080!
```

## Review
Congratulations! Webpack is up and running. Essentially, everything to configure Webpack has been covered; an entry point has been established, JavaScript files are bundled into one browser compatible file, `main.js` is dynamically referenced and an `index.html` file is generated in the distribution folder to which the server is pointing to. Nevertheless, when the `build` command is run, the command line is warning that no mode has been set and that it will fallback to production mode as its default. The warning also states that production or development modes can be set as defaults as well as the option of not setting a mode at all. This will be covered in the next branch.

## [Main Branch](https://github.com/michihodges/webpack-basics)
## [Next Branch](https://github.com/michihodges/webpack-basics/tree/07-webpack-mode)
