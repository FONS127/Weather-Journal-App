// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

const port = 8080



// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const server = app.listen(port, () => { console.log(`Running on localhssost: ${port}`) })



app.post('/postdata', function (req, res) {
    projectData = req.body;
    console.log("Server Received Post")
    console.log(projectData);


    res.send(JSON.stringify("Posted Successfully"));
})

app.get('/getdata', function (req, res) {
    console.log("Server Received Get")
    res.send(projectData);
})


