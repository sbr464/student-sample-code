var express = require('express');
var bodyParser = require('body-parser');
var io = require('socket.io');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/socket-chat');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

var server = app.listen(6971, function() {
	console.log('Express server listening on port ' + server.address().port);
});

// Redefine IO to be the actual server created
io = io.listen(6972);

// Listen for incoming connections...
io.on('connection', function(socket){
	// Listen for incoming requests to set new
	// username for this socket
	socket.on('username', function(username){
		// Set the socket data "username" to the given value
		socket.set('username', username, function(){
			console.log('username set:', username);
		});
	});

	// Allow users to join a room with a given name
	socket.on('joinroom', function(roomName){
		// Leave my current rooms so i'm only ever in one
		for(var room in io.sockets.manager.roomClients[socket.id]){
			// get the name of the room without the initial '/'
			var leaveName = room.substr(1);
			// leave this room by name
			socket.leave(leaveName);
		}

		// Join the new room requested
		socket.join(roomName);

		// Get the new full listing of all room names
		var roomNames = [];
		for(var room in io.sockets.manager.rooms){
			// Keep track of JUST the names as an array
			// also, ignore the global room
			if(room !== '')
				roomNames.push(room.substr(1));
		}
		// Broadcast the whole list out to clients
		io.sockets.emit('roomlisting', roomNames);
	});

	socket.on('message', function(message){
		// first, getting the username data from the socket
		socket.get('username', function (err, username){
			// get the list of rooms I'm in
			// (which should only be one)
			var myRooms = io.sockets.manager.roomClients[socket.id];
			for(var room in myRooms){
				var roomName = room.substr(1);
				// emit the message to each room (ignore global)
				// send the message value and the user who sent it
				if(room !== ''){
					io.sockets.in(roomName)
						.emit('message', {
							message: message,
							user: username
						});
				}
			}
		});
	});
});


