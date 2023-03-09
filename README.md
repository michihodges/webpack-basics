# Webpack Entry
Webpack first needs an entry point for it to compile and build assets. An entry point is where Webpack starts from, which is normally `./src/index.js`, however, due to Express already being set up with a slightly different file structure, `./src/client/index.js` will need to be referenced and created. When Webpack is run with the `build` command, the output (result) should be `./dist/main.js` in the project root, that is, on the same level as the project folder, Node and congig files. To test that Webpack is doing what it should be doing, which essentially is, compile code from one file into another, an `alert('I exist!')` can be added inside `index.js` before having it run and build. Below is a set of instructions on how to setup and test the entry point:

## Configure Entry Point
Add entry point to `webpack.config.js`:
```js
module.exports = {
    entry: './src/client/index.js' // Notice the entry point is in ./src/client/index.js and not ./src/index.js
}
```

## Configure Intended Output
Link `./dist/main.js` in `index.html` inside and at the bottom of the <body>:
```html
<body>
    <!--All other code is here-->
    <script type="text/javascript" src="../../../dist/main.js"></script>
</body>
```

## Test Entry Point
Create `index.js` inside `./src/client`:
```
touch index.js
```
Add test content:
```js
alert('I exist!')
```

## Output
Run Webpack:
```
npm run build
```
The output should be a `dist` folder containing a `main.js` file with the `alert('I exist!')` showing at the end of a lot of compiling code:
```js
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){alert("I exist!")}]);
```
Open `index.html` in the browser and you should see the alert modal pop up with the text 'I exist!':

Make sure to delete the `dist` folder before running webpack again.

## Output
What has been achieved so far is that Webpack has built a `dist` folder containing a `main.js` file with the `alert('I exist!')` that was initially written in the `index.js` file inside the `src` folder showing at the end of a lot of Webpack code. What exactly does that mean? `dist` stands for distribution and pops up in the project root next to the project folder `src` which stands for source. `src` contains everything that you create and edit. `dist` publishes everything from `src` as an optimised format for the web. Any changes that need to be made MUST be made in the `src` folder NOT the `dist` folder, because if they are made in the `dist` folder and Webpack is run again they will be overwritten by the unaltered content in the `src` folder. Having Webpack build a `dist` folder with a `main.js` file that incorporates code from the `index.js` file inside the `src` folder is nice, but it's not being used anywhere and is currently doing very little compared to the potential of what Webpack is capable of. For `main.js` to be doing something it needs to be linked to the `index.html` file which can be found in the folder path `./src/client/views/index.html`. Inside the `<head>` element of the `index.html` file there are multiple links connected to various css and js files in the `src` folder. Normally, this is fine, however, with Webpack the `dist` folder needs to be linked and the other links can be deleted.

### index.html
Add `main.js` inside the `<head>` element where the other links are:
```html
<script type="text/javascript" src="../../../dist/main.js"></script>
```
Note `main.js` can be hard coded for now, however, keep in mind it will be reviewed and dynamically added later.

Delete the rest:
```html
<script type="text/javascript" src="/js/nameChecker.js"></script>
<script type="text/javascript" src="/js/formHandler.js"></script>
<link rel="stylesheet" href="/styles/resets.css">
<link rel="stylesheet" href="/styles/base.css">
<link rel="stylesheet" href="/styles/header.css">
<link rel="stylesheet" href="/styles/form.css">
<link rel="stylesheet" href="/styles/footer.css">
```
Note they will be added again with Sass later.

## [Main Branch](https://github.com/michihodges/webpack-basics)
## [Next Branch](https://github.com/michihodges/webpack-basics/tree/05-webpack-loaders)
