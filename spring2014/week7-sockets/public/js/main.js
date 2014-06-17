// Connect to the socket server
var socket = io.connect('http://localhost:6972');

// When connected, emit a test username up
// to the server to be attached to the given
// socket.
socket.on('connect', function(){
	socket.emit('username', 'Chris');
});

// When a new room listing is received,
// update the local list
socket.on('roomlisting', function(rooms){
	// Clear existing list
	$('#rooms').empty();
	for(var i = 0; i < rooms.length; i++){
		$('#rooms').append('<li>' + rooms[i] + '</li>');
	}
});

// Listen for incoming messages
socket.on('message', function(messageData){
	var message = messageData.message;
	var user = messageData.user;
	// append this message to the listing
	$('#messages').append('<div>' +
		'<strong>' + user + '</strong>: ' +
		message +
		'</div>'
	);
});


$(document).on('ready', function(){

	// Listen for keyup on username
	// field to update username on server
	$('#username').on('keyup', function(e){
		// get the username value
		var username = $(this).val();
		// send it up to the server and store it
		socket.emit('username', username);
	});

	// Listen for enter on newroom field
	$('#newroom').on('keydown', function(e){
		if(e.keyCode === 13){
			// if the enter key is pressed,
			// prevent default and join the room
			e.preventDefault();
			socket.emit('joinroom', $(this).val());
		}
	});

	// Listen for enter on newmessage field
	$('#newmessage').on('keydown', function(e){
		if(e.keyCode === 13){
			// Stop this enter character from being entered
			e.preventDefault();

			// emit the message to the server
			socket.emit('message', $(this).val());

			// Clear the field
			$(this).val('');
		}
	});
});




