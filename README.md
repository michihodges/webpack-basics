# Convenience
## Webpack Dev Server
Webpack Dev Server hot reloads the page and automatically re-builds the app when in development mode.</br>
Install Webpack Dev Server:
```
npm i -D --legacy-peer-deps webpack-dev-server@3.11.2
```
## Clean Webpack Plugin
Notice that we have deleted the `dist` folder manually each time after running the `npm run build` or `npm run build-dev` command. With the Clean Webpack Plugin, it efficiently only rebuilds the files where changes have been made.
Install Clean Webpack Plugin:
```
npm i -D --legacy-peer-deps clean-webpack-plugin@3.0.0
```
Alternatively, you can go really low tech by simply editing the build script and blanket delete the `dist` folder every time:
```js
rm -rf dist && webpack-dev-server  --config webpack.dev.js --open
```