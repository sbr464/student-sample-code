var express = require('express');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', indexController.index);


var http = require('http').Server(app);
var socketio = require('socket.io')(http);

socketio.on('connection', function(socket){
  console.log('user connected');
  var socketController = require('./controllers/socketController.js');
  var controller = socketController(socketio, socket);

  socket.on('message', controller.message);
  socket.on('saySomething', controller.saySomething);
});


var server = http.listen(7671, function(){
  console.log('Express server listening on port ' + server.address().port);
});

// var server = app.listen(7671, function() {
// 	console.log('Express server listening on port ' + server.address().port);
// });
