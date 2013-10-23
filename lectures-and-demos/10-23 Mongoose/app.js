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
// MONGOOSE
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/advancedmongoose');
var models = require('./models/users')

account = new models.Account({
	company : "    Apple     "
});

account.save(function(err){
	console.log(err)
})
// models.Account.update({_id : "5267f01ad1240d661e000002"}, {$push : {users : {
// 	name : "Jose",
// 	email : "jose@humandesign.com",
// 	password: "joserules"
// }}}, function(err, data){
// 	console.log(err, data)
// });

// models.Account.findOneAndUpdate({
// 	_id : "5267f01ad1240d661e000002"
// }, {company : "test"}, function(err, acc){
// 	console.log(err, acc)
// })



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
