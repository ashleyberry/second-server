console.log ( 'in client.js' );

$( document ).ready( onReady );

function onReady () {
    console.log ( 'JQ is ready' )
    //let activities = ??? //need a way to get activities from server
// into client.js

// AJAX!!!!
// lobs the ball back and forth between server and client
// tell jquery where does our ajax need to go
// makes request to back end
$.ajax( {
    url: '/activities'
} ).then( function ( activities ) { // passes response from url
    console.log( 'We got a response!', activities )
    // Render the activities
    for (let activity of activities) {
        $( 'tbody' ).append ( `
            <tr>
                <td>${activity.activity}</td>
                <td>${activity.isScreenTime}</td>
                <td>${activity.type}</td>
            </tr>
        `);
    } // end for loop
} ); // end Ajax .then ()

} // end onReady

