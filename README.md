# Express
Express.js (Express) is one of the most popular Node frameworks for building web applications quickly and easily. The CORS and Body-Parser packages will also need to be installed for Express to work properly. CORS allows for communication across the web, which is important when getting and posting data from an API (Application Programming Interface). Body-Parser acts as Middleware, allowing data to be parsed and is passed through routes onto the server. As previously explained in the 01-node branch, it is important and critical which package versions are installed. The following steps demonstrate how easily an Express server can be set up locally with the compatible packages and correct file structure:

## Initial Setup
Before installing any packages, it is important to understand the necessary file structure, where the project assets need to be and where Node based things need to be. Everything that is Node based should be in the project root which is the projects main folder. Everything that is project based should be in the project folder which in this case is named `website`. The file structure can be found above this README.md file at the top of this GitHub repository.

## Install Packages
Install Express, CORS and Body-Parser:
```
npm i --legacy-peer-deps express@4.17.1
npm i --legacy-peer-deps cors@2.8.5
npm i --legacy-peer-deps body-parser@1.19.0
```

## Build Server
Create a `server.js` file:
```
touch server.js
```

Add the following code:
```js
// Empty object to act as endpoint for all routes
projectData = {};

// Express
const express = require('express');
const app = express();

// Body-Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize main project folder
app.use(express.static('website')); // This links the server to the index.html inside the website folder

// Local server
const port = 8000;
const server = app.listen(port, ()=>{console.log(`server running on localhost ${port}`)});
```

## Run Server
```
node server.js
```
The console should print:
```
server running on localhost 8000
```

## CONGRATS! &nbsp; :raised_hands:
Your server is now up and running!

## [Main Branch](https://github.com/michihodges/webpack-basics)
## [Next Branch](https://github.com/michihodges/webpack-basics/tree/03-webpack)
