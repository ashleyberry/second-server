// put required libraries at top of .js file
// modules don't require a filepath, just give it name of file installed
const express = require ( 'express' );

console.log( 'I am a server!' );

// call the express function and assign return value as app
const app = express ();

// serve static files from server/public folder
app.use ( express.static ( 'server/public' ) );

// Define a list of activities for Edan's kid
let activities = [
    {
        activity: 'Typing practice',
        isScreenTime: true,
        type: 'Mind Exercises'
    },
    {
        activity: 'Bike around the lake',
        isScreenTime: false,
        type: 'Body break'
    },
    {
        activity: 'FB Chat with a friend',
        isScreenTime: true,
        type: 'Social'
    },
];

// Endpoint aka Route:
// GET /activities 
// Respond with a list of activities
// ways that we handle the request and response
app.get ( '/activities', function ( req, res ) {
    // send back the array of activities
    res.send ( activities );
} );

//listen for requests
//takes two arguments - a port number and an onReady callback function
const port = 3000;
app.listen(port, function () {
    console.log( 'Mystery Science Theater 3000 is listening' )
});