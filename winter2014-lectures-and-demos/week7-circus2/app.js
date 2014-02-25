var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var ClownController = require('./controllers/clown.js')

var app = require('./config/express')();

// routes
app.get('/', ClownController.list);
app.get('/clown/save/:name', ClownController.save);
app.get('/clown/remove/:name', ClownController.remove);

// server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
