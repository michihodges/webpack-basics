# Webpack Entry
Before Webpack can map app assets including dependencies it needs somewhere to start. The default entry point is `./src/index.js`, however, due to Express already being set up with a slightly different file structure and the file not existing the entry point will need to be configured in the config file.

## File Structure
Note that the assets in the project folder have not been altered from the previous 03-webpack branch. The intended configuration and testing can be found bellow:

## Configure Entry Point
Add entry point to `webpack.config.js`:
```js
module.exports = {
    entry: './src/client/index.js' // Notice the entry point is in ./src/CLIENT/index.js and not ./src/index.js
}
```

## Test Entry Point
Add test content to `src/client/index.js`:
```js
alert('I exist!') // Alert is a nice visual alternative to console.log for testing
```

## Run Webpack
```
npm run build
```
The result should be a `dist` folder containing a `main.js` file with the `alert('I exist!')` showing at the end:
```js
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){alert("I exist!")}]);
```
Delete the `dist` folder after observing the output and before running webpack again.

## [Return to Main](https://github.com/michihodges/webpack-basics)
