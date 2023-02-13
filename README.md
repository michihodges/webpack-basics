# Webpack Basics
A walkthrough for setting up Webpack for an Express based app.</br></br>

Checkout [01-node](https://github.com/michihodges/webpack-basics/tree/01-node) if you need to install and setup Node.js.</br>
Checkout [02-express](https://github.com/michihodges/webpack-basics/tree/02-express) if you need to install and setup Express.</br>
Checkout [03-webpack](https://github.com/michihodges/webpack-basics/tree/03-webpack) if you need to install and setup Webpack.</br>
Checkout [04-webpack-entry](https://github.com/michihodges/webpack-basics/tree/04-webpack-entry) if you need to setup and test your Webpack entry.</br>
Checkout [05-webpack-loaders](https://github.com/michihodges/webpack-basics/tree/05-webpack-loaders) if you need to setup Webpack loaders like Babel.</br>
Checkout [06-webpack-plugins](https://github.com/michihodges/webpack-basics/tree/06-webpack-plugins) if you need to setup Webpack plugins like HTML Webpack Plugin.</br>

## Convenience
### Webpack Dev Server
Webpack Dev Server hot reloads the page and automatically re-builds the app when in development mode.</br>
Install Webpack Dev Server:
```
npm i -D --legacy-peer-deps webpack-dev-server@3.11.2
```
### Clean Webpack Plugin
Notice that we have deleted the `dist` folder manually each time after running the `npm run build` or `npm run build-dev` command. With the Clean Webpack Plugin, it efficiently only rebuilds the files where changes have been made.
Install Clean Webpack Plugin:
```
npm i -D --legacy-peer-deps clean-webpack-plugin@3.0.0
```
Alternatively, you can go really low tech by simply editing the build script and blanket delete the `dist` folder every time:
```js
rm -rf dist && webpack-dev-server  --config webpack.dev.js --open
```
