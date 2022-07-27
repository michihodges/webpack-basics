# Webpack Content
Setup template for an Express and Webpack based app.

1. [Node and NPM](#node-and-npm)
2. [Express Server](#express-server)
3. [Architecture](#architecture)

## Node and NPM
### Check or Install Node Environment
Open your CLI.</br>
Check Node and NPM is installed:
```bash
node --version
// or
node -v
```
```bash
npm --version
// or
npm -v
```
To install Node download [here](https://nodejs.org/en/).</br>
To reinstall Node download [here](https://nodejs.org/en/).</br>

### New Project
If you intend to start a new project, you will need to initiate a NPM:
```bash
npm init
```

### Contribute
If you intend to contribute to a project with a present `package.json` file, you will need to install it's dependencies:
```bash
npm install
```

## Express Server
### Install Dependencies
Install Express:
```bash
npm install express
```

## Architecture
The initial file and folder architecture should look like this:
```bash
|–– src
|   |–– client
|   |   |–– js
|   |   |   |–– formHandler.js
|   |   |   |–– nameChecker.js
|   |   |–– styles
|   |   |   |–– base.css
|   |   |   |–– footer.css
|   |   |   |–– form.css
|   |   |   |–– header.css
|   |   |   |–– resets.css
|   |   |–– views
|   |   |   |–– index.html
|   |   |–– index.js
|   |–– server
|   |   |–– index.js
|   |   |–– mockAPI.js
```
