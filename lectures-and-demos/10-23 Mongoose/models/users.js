var mongoose = require("mongoose")

Schema = mongoose.Schema

users = new Schema({
	name : String,
	email : String,
	password : String
})

accounts = new Schema({
	company : {type : String, match: /^a/, trim: true,uppercase: true,},
	users : [users]
});

accounts.pre('save', function(next){
	// do something
	console.log('THIS IS IN PRE', this)
	this.users.push({
		name : "bob",
		email : "bob@bob.com",
		password : "test"
	});
	
	next()
	
})

var Account = mongoose.model('Account', accounts);

// Account.schema.path('company').validate(function(value) {
// 	if(value == 'Human Design'){
// 		return true
// 	}
// 	return false
// }, 'Thats not your company');

exports.Account = Account

