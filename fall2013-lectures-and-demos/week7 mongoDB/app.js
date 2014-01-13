
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
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

// MongoDB
//Create to the DB if it doesn't exist and connect to it
mongoose.connect('mongodb://localhost/mongotest');

//setup our MongoDB collection
var Cat = mongoose.model('Cat', { 
	name: String
});

// Index route

app.get('/', function(req, res){

	//Pull everything from our Cats collection and send it to the client
	Cat.find({}, function(err, data){
		//send the Cat data to the client using res.render
		res.render('index', {kittens : data})
	});
	
});

app.post('/addcat', function(req, res){

	//Create a new Cat document
	var kitty = new Cat({ name: req.body.catname });

	//Save the Cat document
	kitty.save(function (err) {

		if(err){
			res.send(err)
		}
		else{
			Cat.find({}, function(err, catsData){
				res.send({
					message : "YOUR CAT HAS BEEN SAVED!", 
					cats : catsData
				});
			})
			
		}
	});
})


app.get('/getallcats', function(req, res){
	Cat.find({}, function(err, cats){
	
		if(err){
			res.send(err)
		}
		else{
			console.log('send it')
			res.send(cats)
		}
		
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
