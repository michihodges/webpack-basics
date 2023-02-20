# Node.js
Node.js is essential for setting up Webpack and various packages that make Webpack so useful. In this case, node version 14 is especially important, because each node package that will be installed must be compatible with another and the node version needs to be able to manage them.

Node.js is essential when setting up Webpack, because Webpack is a package based on Node.js and without Node.js you would not even be able to install Webpack. What I have discovered about Node.js, Webpack as well as other Node dependent packages, is that their versions are vital to a project's success and MUST be compatible with each other. I would therefore, from my experience, suggest to install Node.js version 14. This can be done in two ways. If you do not have Node.js installed yet then install version 14. If you have the latest version installed then install NVM (Node Version Manager), install version 14 and if you want to set it to your default version.

## Install Node.js
[Download Node.js](https://nodejs.org/en/download/)

## Confirm Installation
```js
node -v
```

## NVM (Node Version Manager)
### Create a .zshrc File
```js
touch .zshrc
```

### Install NVM
```js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

### Confirm Installation
```js
command -v nvm
```

### Automate NVM
```js
source ~/.nvm/nvm.sh
```

### Install Node.js Version 14
```js
nvm i 14
```

### Replace Default Node.js Version
```js
nvm alias default 14
nvm use 14
```

### Confirm Node.js Version
```js
node -v
```

## NPM (Node Package Manager)
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
