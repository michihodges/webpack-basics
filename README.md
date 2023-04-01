# Convenience
Congratulaions! Webpack has been set up successfully! Now to make things a little more convenient. Developers often switch from the text editor to the browser in order to check that the things they are implementing are working correctly. This normally would mean that the server would have to be manually reloaded every time a new feature has been created in order to update the browser. The Webpack Dev Server does away with this by hot reloading (automatically reloading) the server, saving time as well as some wear and tear on certain shortcut keys. As the name suggests, it is intended solely for development and therefore only works in development mode. Another thing that is somewhat tedious, is the manual deletion of the `dist` folder before rebuilding it in development mode when making channges and testing. Now, there is a simple low tech solution to this where the entire `dist` folder is automatically deleted every time and there is a plugin that updates the files in the `dist` folder where changes have been made. In contrast, blanket deleting the whole folder is a very overkill approach compared to a plugin that updates specific files that have been altered and essentially achieves the same result. Below are the steps to set up the Webpack Dev Server as well as choose between setting up the Clean Webpack Plugin or implementing the low tech option. Note that the plugin has been implemented in the project files provided:

## Webpack Dev Server
### Install Webpack Dev Server
In the Command Line enter:
```
npm i -D --legacy-peer-deps webpack-dev-server@3.11.2
```

### Configure package.json
Replace the `build-dev` script with:
```js
"build-dev": "webpack-dev-server --config webpack-dev-server --open"
```

## EITHER:
### Install Clean Webpack Plugin
In the Command Line enter:
```
npm i -D --legacy-peer-deps clean-webpack-plugin@3.0.0
```

### Configure Webpack Plugin
Require the package at the top of `webpack.dev.js`:
```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
```
Implement it after the `new HtmlWebpackPlugin` object:
```js
new CleanWebpackPlugin({
    // Simulate the removal of files
    dry: true,
    // Write Logs to Console
    verbose: true,
    // Automatically remove all unused webpack assets on rebuild
    cleanStaleWebpackAssets: true,
    protectWebpackAssets: false
})
```
Don't forget to add the comma after the `new HtmlWebpackPlugin` object.

## OR:
### Configure package.json
To blanket delete the `dist` folder simply edit the `build-dev` by adding `rm -rf dist &&`:
```js
"build-dev": "rm -rf dist && webpack-dev-server  --config webpack.dev.js --open"
```

## Run Development Mode
In the Command Line enter:
```
npm run build-dev
```

## Make Changes
For instance, open `./src/client/index.js` and add another `alert()`:
```js
alert('I also exist!')
```

## Exit Development Mode
To stop the Webpack Dev Server from running enter the `control/ctrl + C` shortcut keys in the Command Line:
```
control/ctrl + C
```

## Review
What should now happen when running development mode in both cases is that the browser is immediatley opened using the localhost URL. Any changes that are saved in the text editor instantly reloads and refreshes the browser. Note that a `dist` folder is no longer created in the text editor environment, but is present and 'pretified' when opening the developer tools in the browser. Initially, I found this quite irritating, because I was expecting one to be built and wanted to test things further in the text editor. Then, after considering where changes to the website were meant to be seen, it occured to me that they made more sense in the browser rather than in the text editor, because the browser is where changes should be tested and not in the text editor. The result when running production mode should remain the same, as nothing new has been installed and configured for that mode.

## [Main Branch](https://github.com/michihodges/webpack-basics)
