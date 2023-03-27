# Convenience
Congratulaions! Webpack has been set up successfully! Now to make things a little more convenient. Developers often switch from the text editor to the browser in order to check that the things they are implementing are working correctly. This normally would mean that the server would have to be manually reloaded every time a new feature has been created in order to update the browser. The Webpack Dev Server does away with this by hot reloading (automatically reloading) the server, saving time as well as some wear and tear on certain shortcut keys. As the name suggests, it is intended solely for development and therefore only works in development mode. Another thing that is somewhat tedious, is the manual deletion of the `dist` folder before rebuilding it in development and production mode. Now, there is a simple low tech solution to this where the entire `dist` folder is automatically deleted every time and there is a plugin that updates the files in the `dist` folder where changes have been made. In contrast, blanket deleting the whole folder is a very overkill approach compared to a plugin that updates specific files that have been altered and essentially achieves the same result. Below are the steps to set up the Webpack Dev Server as well as choose between setting up the Clean Webpack Plugin or implementing the low tech option. Note that the plugin has been implemented in the project files provided:

## Webpack Dev Server
### Install Webpack Dev Server
```
npm i -D --legacy-peer-deps webpack-dev-server@3.11.2
```

### Configure package.json
Replace the `build-dev` script with:
```js
"build-dev": "webpack-dev-server --config webpack-dev-server --open"
```

## EITHER:
## Clean Webpack Plugin
### Install Clean Webpack Plugin
```
npm i -D --legacy-peer-deps clean-webpack-plugin@3.0.0
```

### Configure Webpack Plugin
Require 

## OR:
## Blanket Deletion
Alternatively, you can go really low tech by simply editing the build script and blanket delete the `dist` folder every time:
```js
rm -rf dist && webpack-dev-server  --config webpack.dev.js --open
```

## Run Webpack

## Review

## [Main Branch](https://github.com/michihodges/webpack-basics)
