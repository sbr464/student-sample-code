var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var Config = module.exports = function() {

	var app = express();

	app.set('port', process.env.PORT || 3006);
	app.set('views', path.join(__dirname, '../views'));
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, '../public')));

	var env = app.get('env');
	if(env === 'development') {
	  app.use(express.errorHandler());
		mongoose.connect('mongodb://localhost/circus');
	}
	else if(env === 'production') {
		throw new Error('Missing connection string for production Mongo database.')
	}
	else {
		throw new Error('Unknown environment: ' + env)
	}

	return app;
};
