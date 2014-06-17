
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var IndexController = require('./controllers/indexController');
var BookController = require('./controllers/bookController');

// CONNECT TO MONGODB
mongoose.connect('mongodb://localhost/library');

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

// INDEX
app.get('/', IndexController.index);

// ADD BOOK FORM
app.get('/book', BookController.index);

// POST FROM BOOK FORM
app.post('/book/add', BookController.add);

// DELETE A BOOK
app.get('/book/remove/:id', BookController.remove);
app.get('/book/removeAjax/:id', BookController.removeAjax);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
