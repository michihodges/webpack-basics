# Express
Express.js (Express) is one of the most popular Node frameworks for building web applications quickly and easily. The CORS and Body-Parser packages will also need to be installed for Express to work properly. CORS allows for communication across the web, which is important when getting and posting data from an API (Application Programming Interface). Body-Parser acts as Middleware, allowing data to be parsed and is passed through routes onto the server. Again, as previously explained in the 01-node branch, it is important and critical which package versions are installed. The following steps demonstrate how easily an Express server can be set up locally with the compatible packages:

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
app.use(express.static('website'));

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

## DONE! &nbsp; :raised_hands:

## Return to Main
[Return to Main](https://github.com/michihodges/webpack-basics)
