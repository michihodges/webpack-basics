# Webpack Mode
Intro
What is mode?
What is the difference between developer mode and production mode?
How are different modes setup?
Which tools are setup and used for the different modes?

Modes are specific environments that can be configured to assist with development, testing, debugging, production and various other workflows or .  

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

## Return to Main
[Return to Main](https://github.com/michihodges/webpack-basics)
