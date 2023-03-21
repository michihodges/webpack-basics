var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

// app.use(express.static('src/client'))
app.use(express.static('dist')) // Update

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
    res.sendFile('dist/index.html') // Update
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
