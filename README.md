# Webpack Loaders
So far Webpack has been installed and configured with an entry point resulting with an output where the content of one JavaScript file has ended up in another when Webpack is run. However, what is if more files needed to be added and linked? With ES6 (JavaScipt version 6), this problem could easily be solved by using `require` in the `./src/client/index.js` to link further files, nonetheless, most browsers are still using ES5 (JavaScript version 5 otherwise called vanilla) and do not understand what `require` means. To solve this problem, another library needs to be installed and configured called Babel. Essentially, Babel is a Loader that translates ES6 JavaScript into vanilla JavaScript for the browser to understand and implement. A Loader is a Node based package that converts similar file types into newer, older or optimised versions. Once Babel is configured, `export` can be used in the files that need to be added to `index.js` and `import` needs to be declared inside `index.js`. Follow the steps below to setup Babel and have more JavaScript files added to `main.js`:

## Install Babel
```
npm i -D --legacy-peer-deps @babel/core@^7.13.15 @babel/preset-env@^7.13.15 babel-loader@^8.2.2
```
## Configure Babel
Create a `.babelrc` file in the project root:
```
touch .babelrc
```
Add the following code:
```js
{ "presets": ["@babel/preset-env"] }
```
Add the following code under `entry` in `webpack.config.js`:
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

## Incorporate Other JavaScript Files
## Export
Export formHandler.js:
```js
export function handleSubmit(event) {...} // Simply add 'export' to the beginning of the function
```
Export nameChecker.js:
```js
export function checkForName(inputText) {...} // Add 'export' to the beginning of the function
```

## Import
Import formHandler.js and nameChecker.js then console.log one of the functions:
```js
import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

console.log(checkForName);

alert('I exist!') // Keep the alert for now
```

The result should be `console.log(checkForName);` showing up in the `main.js` file just before `alert('I exist!')`.

## [Main Branch](https://github.com/michihodges/webpack-basics)
## [Next Branch](https://github.com/michihodges/webpack-basics/tree/06-webpack-plugins)
