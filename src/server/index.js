// Require dependencies
const path = require('path')
const express = require('express')

// Start up an instance of app
const app = express()

// Initialize the main project folder
app.use(express.static('src/client'))
console.log(__dirname)

// Setup server
const port = 3000
app.listen(port, ()=>{
    console.log(`server running on localhost ${port}`)
})
