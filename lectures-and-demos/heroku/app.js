
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

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

var mongoose = require('mongoose');
mongoURI = global.process.env.MONGOHQ_URL || 'mongodb://localhost/test'
mongoose.connect(mongoURI);

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err)
  console.log('meow');
});

var kitty = new Cat({ name: 'Ajax' });
kitty.save(function (err) {
  if (err)
  console.log('meow');
});
app.get('/', routes.index);
app.get('/cats', function(req, res){
	Cat.find({}, function(err, doc){
		res.send(doc)
	})
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
