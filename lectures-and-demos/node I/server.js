// var myLibrary = require('./mylibrary')
// myLibrary.sayHello()
// myLibrary.sayGoodbye()

// This loads the http module
var http = require('http');
var fs = require('fs');

console.log(__dirname)

// This configures our http server
var server = http.createServer(function (request, response) {
	// GET MY POST DATA
	request.setEncoding('utf8');
	request.on('data', function(data) {
		console.log(data);
	});

	//SEND SOME JSON
	response.end(JSON.stringify({success : true}))

	// fs.readFile(__dirname + '/index.html', function(err, data){

	// 	if(err){
	// 		response.writeHead(404)
	// 		response.end("FILE NOT FOUND")
	// 	}
	// 	else{
	// 		response.writeHead(200)
	// 		response.end(data)
	// 	}
	// });

	//store something in a database


});

// Listen on port 3000, IP defaults to 127.0.0.1 or localhost
server.listen(3000);

// Log what is happening, so we can see it in terminal
console.log("Server running at http://127.0.0.1:3000/");
 