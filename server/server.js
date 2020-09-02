// put required libraries at top of .js file
// modules don't require a filepath, just give it name of file installed
const express = require ( 'express' );

console.log( 'I am a server!' );

// call the express function and assign return value as app
const app = express ();

//listen for requests
//takes two arguments - a port number and an onReady callback function
const port = 3000;
app.listen(port, function () {
    console.log( 'Mystery Science Theater 3000 is listening' )
});