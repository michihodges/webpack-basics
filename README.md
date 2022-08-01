# Webpack Content
Walkthrough and template for an Express and Webpack based app.

1. [Node and Express](#node-and-express)
2. [Architecture](#architecture)
3. [Initial Setup](#initial-setup)
4. [Webpack](#webpack)
5. [Webpack Entry](#webpack-entry)

## Node and Express
### Node and NPM (Node Package Manager)
Node includes NPM when installed.
#### Check or Install Node Environment
Open your CLI to check Node and NPM is installed:
```
node --version
// or
node -v
```
```
npm --version
// or
npm -v
```
To install Node, download [here](https://nodejs.org/en/).</br>
Should you need to reinstall Node, download [here](https://nodejs.org/en/).</br>

#### New Project
If you intend to start a new project, you will need to initiate NPM:
```
npm init
```

#### Contribute
If you intend to contribute to a project with a present `package.json` file, you will need to install it's dependencies:
```
npm install
// or
npm i
```

### Express
Install Express:
```
npm install --legacy-peer-deps express@4.17.1
// or
npm i --legacy-peer-deps express@4.17.1
```

## Architecture
The initial file and folder architecture should look like this:
```
|–– node_modules
|–– src
|   |–– client
|   |   |–– js
|   |   |   |–– formHandler.js
|   |   |   |–– nameChecker.js
|   |   |–– styles
|   |   |   |–– base.css
|   |   |   |–– footer.css
|   |   |   |–– form.css
|   |   |   |–– header.css
|   |   |   |–– resets.css
|   |   |–– views
|   |   |   |–– index.html
|   |   |–– index.js
|   |–– server
|   |   |–– index.js
|   |   |–– mockAPI.js
|–– package-lock.json
|–– package.json
```
`package.json`, `package-lock.json` and `node_modules` are automatically generated with the `npm init` and `npm install` commands. Any further dependencies installed will be saved there.

## Initial Setup
### Starter Code
#### src/client/js
##### formHandler.js
```js
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}
```

##### nameChecker.js
```js
function checkForName(inputText) {
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

#### src/client/styles
##### base.css
```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 2;
}

section {
    max-width: 800px;
    margin: 50px auto;
}
```
##### form.css
```css
form {
    border: 1px solid #545454;
    border-radius: 3px;
    padding: 40px;
}

input {
    padding: 5px 20px;
    width: 100%;
    line-height: 16px;
    margin: 10px 0;
}
```
##### header.css
```css
header {
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;
}
```
##### resets.css
```css
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

* {
    box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
ul {
    list-style-type: none;
}
```

#### src/client/views
##### index.html
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Test</title>
        <script type="text/javascript" src="/js/nameChecker.js"></script>
        <script type="text/javascript" src="/js/formHandler.js"></script>
        <link rel="stylesheet" href="/styles/resets.css">
        <link rel="stylesheet" href="/styles/base.css">
        <link rel="stylesheet" href="/styles/header.css">
        <link rel="stylesheet" href="/styles/form.css">
        <link rel="stylesheet" href="/styles/footer.css">
    </head>

    <body>

        <header>
            <div class="">
                Logo
            </div>
            <div class="">
                navigation
            </div>
        </header>

        <main>
            <section>
                <form class="" onsubmit="return handleSubmit(event)">
                    <input id="name" type="text" name="input" value="" onblur="onBlur()" placeholder="Name">
                    <input type="submit" name="" value="submit" onclick="return handleSubmit(event)" onsubmit="return handleSubmit(event)">
                </form>
            </section>

            <section>
                <strong>Form Results:</strong>
                <div id="results"></div>
            </section>
        </main>

        <footer>
            <p>This is a footer</p>
        </footer>

    </body>
</html>
```

#### src/server
##### index.js
```js
// Require dependencies
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// Start up an instance of app
const app = express()

// Initialize the main project folder
app.use(express.static('src/client'))
console.log(__dirname)

// GET Route index.html
app.get('/', function (req, res) {
    res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
})

// Setup server
const port = 3000
app.listen(port, ()=>{
    console.log(`server running on localhost ${port}`)
})

// GET Route mockAPI
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
```
##### mockAPI.js
```js
let json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

module.exports = json
```
#### package.json
```js
{
  "name": "webpack-content",
  "version": "1.0.0",
  "description": "Walkthrough and template for an Express and Webpack based app.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/server/index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/michihodges/webpack-content.git"
  },
  "author": "michihodges",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/michihodges/webpack-content/issues"
  },
  "homepage": "https://github.com/michihodges/webpack-content#readme",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

### Run Server
Test and start the server by running `npm start` in the CLI.

## Webpack
### Installation
Install Webpack, Webpack-cli and Webpack-dev-server.
```
npm i --legacy-peer-deps webpack@4.35.3
npm i --legacy-peer-deps webpack-cli@3.3.5
npm i --save-dev --legacy-peer-deps webpack-dev-server@3.11.2
```

### Configuration
#### package.json
Add build command to package.json:
```js
"scripts": {
    "build": "webpack"
}
```
#### webpack.config.js
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
