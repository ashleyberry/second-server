console.log ( 'in client.js' );

$( document ).ready( onReady );

function onReady () {
    console.log ( 'JQ is ready' )
    //let activities = ??? //need a way to get activities from server
    // into client.js

    // Handle new activity form
    $( document ).on( 'click', '#submitBtn', onSubmit );
    refreshActivities ()
} // end onReady

// grab existing activities from server and rerender them
function refreshActivities () {
    console.log ( ' in refreshActivities' );
    // AJAX!!!!
    // the tool that lets us make requests to our node server
    // lobs the ball back and forth between server and client
    // tell jquery where does our ajax need to go
    // makes request to back end
    $.ajax( {
        url: '/activities',
        method: 'GET' // this method has to match with app.get function call
    } ).then( function ( activities ) { // passes response from url
        console.log( 'We got a response!', activities )
        // Render the activities
        $( 'tbody' ).empty();
        for ( let activity of activities ) {
            $( 'tbody' ).append ( `
                <tr>
                    <td>${ activity.activity }</td>
                    <td>${ activity.isScreenTime }</td>
                    <td>${ activity.type }</td>
                </tr>
            `);
        } // end for loop
    } ).catch ( function ( errorInfo ) { 
        // catch is common programming term for 
        // if there's an error, let me catch it
        console.log ( 'Something bad happened!', errorInfo );
        alert( 'Server is down, try again later' );
    
    } ); // end Ajax .then ()
} // end refreshActivities

function onSubmit() {
    //create activity object from form data
    let newActivity = {
        activity: $( '#activityInput' ).val(),
        type: $( '#typeInput' ).val(),
        isScreenTime: $( '#isScreenTimeInput' ).is( ':checked' )
    };
    console.log(' new activity object', newActivity);

    // POST /activities
    // with our newActivity object
    $.ajax( { 
        url: '/activities',
        method: 'POST',
        data: newActivity // can be any value that we want to send to server
     } ).then ( function ( response ) {
         console.log( 'Created an activity!', response );
         console.log( 'time to refresh!' )
         refreshActivities(); 
     }).catch ( function ( errorInfo ) {
         console.log ( 'oh noes!', errorInfo );
     });
} // end onSubmit