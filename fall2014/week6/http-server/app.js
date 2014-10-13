// Start the application by using "node app.js"

// Use the HTTP core module to help with
// server-based management
var http = require('http');

/**
 * Handler for incoming requests. Much like
 * the event handlers we are used to in jQuery,
 * but these will be called whenever any request
 * to this IP:Port is made.
 * @param  {object} request  Information about the request
 *                           Often seen as "req" instead of "request"
 * @param  {object} response Helper for sending back a response
 *                           Often seen as "res" instead of response
 */
var handleRequests = function(request, response){
	console.log('Request came in.');

	// Log the url that was requested
	console.log(request.url);

	// This will tell the requester (in our case,
	// the browser) that it was 200-OK and that
	// the content to be sent will be done as plain text
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	// Tell the browser that it
	// should close the connection
	// after recieving the data in "end"
	response.end('Hello, you requested ' + request.url);
};

// Create a new server and tell it to pass all
// incoming requests through to our handleRequests
// function declared above.
var server = http.createServer(handleRequests);

// Start the server and listen for any connection
// requests on port 3000
server.listen(3000);

// Just a reminder that the server has started on port 3000
console.log('Server running on port 3000');