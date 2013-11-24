
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var _ = require('underscore')
var twitter = require('ntwitter')
var io = require('socket.io')
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){
	res.render('index')
});

var t = new twitter({
    consumer_key: 'YOUR CONSUMER KEY',   
    consumer_secret: 'YOUR CONSUMER SECRET',   
    access_token_key: 'YOUR ACCESS TOKEN KEY',     
    access_token_secret: 'YOUR ACCESS TOKEN SECRET'     
})

var count = 0

var server = http.createServer(app)

//Start a Socket.IO listen
var socketServer = io.listen(server);

 //Tell the twitter API to filter on the watchSymbols 
// t.stream('statuses/filter', { track: 'html'}, function(stream) {
 
//   //We have a connection. Now watch the 'data' event for incomming tweets.
//   stream.on('data', function(tweet) {
//     // console.log(tweet)
//     socketServer.sockets.emit('data', {
//         count : count++,
//         tweet : tweet.text
//     });
//   });
// });

//Set the sockets.io configuration.
//THIS IS NECESSARY ONLY FOR HEROKU!
// sockets.configure(function() {
//   sockets.set('transports', ['xhr-polling']);
//   sockets.set('polling duration', 10);
// });
 
//If the client just connected, give them fresh data!
// socketServer.sockets.on('connection', function(socket) { 
// });
// SIMPLE DEMO
var users = {}

socketServer.sockets.on('connection', function(socket) { 
    console.log('SOMEONE CONNECTED!')
    users[socket.id] = socket.id
    // socket.emit('message', 'HI!')

    socket.on('message', function(message){
        socket.broadcast.emit('message', message)
    });
});

server.listen(3000, function(){
  console.log('Express server listening on port ' + app.get('port'));
});


