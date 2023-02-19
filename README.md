# Node.js
Node.js is essential for setting up Webpack and various packages that make Webpack so useful. In this case, node version 14 is especially important, because each node package that will be installed must be compatible with another and the node version needs to be able to manage them. There may be better ways to go about this, nonetheless, this is what worked for me:</br></br>

Install node.js
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
