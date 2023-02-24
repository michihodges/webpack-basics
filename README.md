# Node.js
Node.js (Node) is essential when setting up Webpack, because Webpack is a package based on Node and without Node you would not even be able to install Webpack. What I have discovered about Node, Webpack as well as other Node dependent packages, is that their versions are vital to a project's success and MUST be compatible with each other. Bellow is a set of instructions how to best install Node version 14 using NVM (Node Version Manager), how to start or contribute to a Node based project using NPM (Node Package Manager) and what to do should you run into any installation errors:

## NVM
Create a .zshrc file:
```js
touch .zshrc
```
Install NVM:
```js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
Confirm Installation:
```js
command -v nvm
```
Automate NVM:
```js
source ~/.nvm/nvm.sh
```

### Install Node Version 14
```js
nvm i 14
```

### Set Default (Optional)
If you have other Node versions installed you can reconfigure the default version to 14 if you wish:
```js
nvm alias default 14
nvm use 14
```
Confirm Node version:
```js
node -v
```

## NPM
NPM will automatically install when installing Node.</br>
### Starting a New Project
```js
npm init // creates a package.json file
```

### Contributing to a Project
```js
npm install // installs everything from the package.json file
```

## Errors
If `npm install` throws an error, try clearing the cache and a fresh re-install with:
```
npm cache clean 
[sudo] npm install -g npm 
npm install
```
Should any vulnerabilities need fixing run:
```
npm audit fix
```

## Return to Main
[Return to Main](https://github.com/michihodges/webpack-basics)
