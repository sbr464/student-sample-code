
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
    consumer_key: 'GQ6WWgJmkJHxcvVTEaOqWA',   
    consumer_secret: '8r5lLBavI6TDxfa40ljTGGmr3ZLOIQ9nShKGan1u8',   
    access_token_key: '1236775772-Cgk2CdymgQHduO7vBHjfkkqi8htOWuZEJ1qJHBE',     
    access_token_secret: '3lP5o6xonVEBFRxi3jXW5NuFM3qohNGSIl3toSilw'     
})

var symbols = ['$msft', '$intc', '$hpq', '$goog', '$nok', '$nvda', '$bac', '$orcl', '$csco', '$aapl', '$ntap', '$emc', '$t', '$ibm', '$vz', '$xom', '$cvx', '$ge', '$ko', '$jnj'];
var watchList = {
    total: 0,
    symbols: {}
};

var count = 0

//Tell the twitter API to filter on the watchSymbols 
t.stream('statuses/filter', { track: 'html'}, function(stream) {
 
  //We have a connection. Now watch the 'data' event for incomming tweets.
  stream.on('data', function(tweet) {
 	// console.log(tweet)
 	sockets.sockets.emit('data', {
 		count : count++,
 		tweet : tweet.text
 	});
    // var claimed = false;
 
    // //Make sure it was a valid tweet
    // if (tweet.text !== undefined) {
 
    //   var text = tweet.text.toLowerCase();

    //   _.each(symbols, function(v) {
    //       if (text.indexOf(v.toLowerCase()) !== -1) {
    //           watchList.symbols[v]++;
    //           claimed = true;
    //       }
    //   });
 
    //   //If something was mentioned, increment the total counter and send the update to all the clients
    //   if (claimed) {
    //       //Increment total
    //       watchList.total++;
 		
    //       //Send to all the clients
    //       sockets.sockets.emit('data', watchList);
    //   }
    // }
  });
});

var server = http.createServer(app)

//Start a Socket.IO listen
var sockets = io.listen(server);
 
//Set the sockets.io configuration.
//THIS IS NECESSARY ONLY FOR HEROKU!
// sockets.configure(function() {
//   sockets.set('transports', ['xhr-polling']);
//   sockets.set('polling duration', 10);
// });
 
//If the client just connected, give them fresh data!
sockets.sockets.on('connection', function(socket) { 
    socket.emit('data', watchList);
});


server.listen(3000, function(){
  console.log('Express server listening on port ' + app.get('port'));
});


