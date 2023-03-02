# Webpack Loaders
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

## [Main Branch](https://github.com/michihodges/webpack-basics)
