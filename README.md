# Webpack Mode
Review
What has been achieved so far?
What is the problem?
How can things be optimised?
Keyword; optimisation (optimise workflow [development] and optimise output [production])

Congratulations! Webpack is up and running. Essentially, everything to configure Webpack has been covered; an entry point has been established, JavaScript files are bundled into one browser compatible file, `main.js` is dynamically referenced and an `index.html` file is generated in the distribution folder to which the server is pointing to. Nevertheless, when the `build` command is run, the command line is warning that no mode has been set and that it will fallback to production mode as its default. The warning also states that production or development modes can be set as defaults as well as the option of not setting a mode at all. This will be covered in the next branch.


Configuring modes is actually quite useful, because they optimise specific development environments, such as, development and production. It makes sense to separate different steps of a project in order to optimise their build, because production code needs to be as optimised as much as possible, where as development code needs to be as clear and understandable as possible. Both are very different environments that require different loaders and plugins. Modes caters for this.

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
