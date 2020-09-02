// put required libraries at top of .js file
// modules don't require a filepath, just give it name of file installed
const express = require ( 'express' );
const activities = require( './data');
const bodyParser = require('body-parser');

console.log( 'I am a server!' );

// call the express function and assign return value as app
const app = express ();

// serve static files from server/public folder
app.use ( express.static ( 'server/public' ) );

// Setup body parser to read request JSON body
app.use ( bodyParser.urlencoded ( { extended: true } ) );


// Endpoint aka Route:
// GET /activities 
// Respond with a list of activities
// ways that we handle the request and response
app.get ( '/activities', function ( req, res ) {
    // send back the array of activities
    res.send ( activities );
} );

// endpoint
// POST /activities
// create a new activity
// and add it to our activities array
app.post('/activities', function (req, res) {
    console.log( 'I got a request!', req.body); //vanilla way to check if not using debugger
    let newActivity = req.body;
    // Add the new activity to our list of activities
    activities.push(newActivity);
    res.send(newActivity);
});

//listen for requests
//takes two arguments - a port number and an onReady callback function
const port = 3000;
app.listen(port, function () {
    console.log( 'Mystery Science Theater 3000 is listening' )
});