var User = require('../models/user');

module.exports = {
	viewList: function(req,res){
		// Get all users and send them to the view
		User.find({}, function(err, docs){
			// Render the index view with all the users
			// accessible in jade under the "users" key
			res.render('index', {
				users: docs
			});
		});
	},
	addUser: function(req, res){
		// Create a new user from posted data
		var userData = req.body;
		// Clean up the skills csv (comma separated value)
		// and convert it to an array
		userData.skills = userData.skills
			.split(',')
			.map(function(item){
				// remove any extraneous whitespace around the
				// skill item
				return item.trim();
			});

		var newUser = new User(userData);
		// Save the user to the DB
		newUser.save(function(err, doc){
			// Send back all users. This is pretty heavy on
			// the transfer weight, so don't always do this
			User.find({}, function(err, docs){
				res.send(docs);
			});
		});
	},
	viewUser: function(req, res){
		// pull user id from url
		var userId = req.params.id;

		// Find the user we are trying to view
		User.findById(userId)
			// this will take the IDs from our friends array
			// and fill them with associated user objects
			// 'friends': the field in our user to populate
			// null: this is the set of fields to pull in via
			// 		populate. Null is all. 'name' is just name
			//		'name skills' is both name and skills
			// 'user': this is the model we want to use as the
			// 		lookup for populate
			.populate('friends', null, 'user')
			// chain another populate from the games collection
			.populate('games', null, 'game')
			// delay the actual request until we've added in the
			// request for population. Calling exec will now make
			// the lookup and populate calls
			.exec(function(err, doc){
				// Render the single user view with the
				// populated doc
				console.log(doc)
				res.render('user', doc);
			});

		/* THIS IS THE OLD, UNPOPULATED LOGIC
		// find the user in the DB
		// shortcut for: User.find({_id: userId}...)
		User.findById(userId, function(err, doc){
			// Render the user view with the returned
			// user object from the DB
			res.render('user', doc);
		});
		*/
	}
};