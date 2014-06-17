var express = require('express');
var app = express();

// route for home page
// first arg: url
// second arg: route handler
app.get('/', function(req, res) {
	// res.header('Content-Type', 'text/html'); // default Content-Type header
	// res.redirect('http://google.com'); // HTTP 302 redirect
	res.send('<h1>Hello Boulder</h1>'); // sends data as an HTTP response, default status code: 200
	
	// res.send(500, 'Error'); // send a custom status code

	// var myvalue = 99;
	// res.send(myvalue); // Whoops! 99 interpreted as status code instead of data
	// res.send(myvalue.toString());
});

var server = app.listen(4594, function() {
	console.log('Express server listening on port ' + server.address().port);
});
