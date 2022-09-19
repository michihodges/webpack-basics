# Node.js
Node.js is essential for setting up Webpack and various packages that make Webpack so useful. Node version 14 is especially important, because each node package that will be installed must be compatible with another and the initial node version needs to be able to manage them. There may be better ways to go about this, nonetheless, this is what worked for me:

## Download Node.js
[Download Node.js](https://nodejs.org/en/download/)

## Confirm Installation
```js
node -v // verifies node version
```

## Install NVM (Node Version Manager)



Therefore, you will either need to check your version or install it:
```js
node -v // checks version
node install 14 // installs 
```

1. [Node and Express](#node-and-express)

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
