# Webpack Mode
Modes are different states or environments in which developers build their web apps. They can be setup in the command line, but in this case, they will be embedded and configured in separate config files. The modes that will be setup are, development and production. They are quite self-explanatory; one is intended to optimise the development phase of the project and the other the production phase. Development mode is intended to make the developer's environment as convenient as possible whereas production mode is meant to be server efficient. There are more modes that can be created, such as, a test mode or a debug mode, however, setting development and production modes will suffice to grasp the concept. A fitting example of a tool intended for development rather than production purposes is the source map tool. Source map generates an extra file called `main.js.map` which 'prettifies' the code generated in the `main.js` file, that is, `main.js.map` has the same content as `main.js`, just spaced and indented for the developer be able to read more easily. This, however, comes at the cost of a greater file size which is less server efficient. Follow the steps below to configure development and production modes as well as implement source map:

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

## Review

## [Main Branch](https://github.com/michihodges/webpack-basics)
