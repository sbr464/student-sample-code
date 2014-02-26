
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var TodoController = require('./controllers/todoController');

mongoose.connect('mongodb://localhost/todoapp');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// ROUTE FOR INDEX -> TodoController.index
app.get('/', TodoController.index);

// ROUTE FOR ADDING A NEW ITEM -> TodoController.addItem
app.post('/addItem', TodoController.addItem);

// ROUTE FOR FILTERING RESULTS -> TodoController.filter
app.post('/filter', TodoController.filter);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
