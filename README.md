# Webpack Content
Walkthrough and template for an Express and Webpack based app.

1. [Node and Express](#node-and-express)
2. [Architecture](#architecture)

## Node and Express
### Node and NPM (Node Package Manager)
Node comes with NPM when installed.
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
To install Node download [here](https://nodejs.org/en/).</br>
Should you need to reinstall Node download [here](https://nodejs.org/en/).</br>

#### New Project
If you intend to start a new project, you will need to initiate a NPM:
```
npm init
```

#### Contribute
If you intend to contribute to a project with a present `package.json` file, you will need to install it's dependencies:
```
npm install
```

### Express
### Install Dependencies
Install Express:
```
npm install express
```

## Architecture
The initial file and folder architecture should look like this:
```
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
