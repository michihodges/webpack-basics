// Empty object to act as endpoint for all routes
projectData = {};

// Express
const express = require('express');
const app = express();

// Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize main project folder
app.use(express.static('website'));

// Local server
const port = 8000;
const server = app.listen(port, ()=>{console.log(`server running on localhost ${port}`)});