# Facebook Login with Passport
## In only 16 steps :/

1. express
1. npm install
1. npm install --save passport
1. npm install --save passport-facebook
1. npm install --save mongoose
1. Create a Facebook App

	* Docs: https://developers.facebook.com/docs/facebook-login/getting-started-web/
	* Create App: https://developers.facebook.com/apps/

1. On the Facebook App dashboard, check "Website with Facebook Login" and set the Site URL: 

		http://localhost:3006/auth/facebook/callback

1. Require mongoose, passport, and passport-facebook:

		, mongoose = require('mongoose')
		, passport = require('passport')
		, FacebookStrategy = require('passport-facebook').Strategy;

1. Initialize passport:

		// IMPORTANT: must add before app.use(app.router)
		app.use(express.cookieParser());
		app.use(express.cookieSession({ secret: '12345' }));
		app.use(passport.initialize());
		app.use(passport.session());

1. Connect to mongoose database:

		mongoose.connect('mongodb://localhost/refactoru-passport-test')

1. Create a User model:

		var User = mongoose.model('User', {
			facebookid: number,
			name: string
		})

1. Set up Passport-Facebook strategy (add your Facebook credentials from Step 6)

		passport.use(new FacebookStrategy({
		    clientID: '12345',
		    clientSecret: 'abcdef',
		    callbackURL: "http://localhost:3006/auth/facebook/callback"
		  },
		  function(accessToken, refreshToken, profile, done) {
		  	// console.log('profile', profile)
		  	User.findOne({ facebookId: profile.id }, function(err, user) {
		  		if(err) { return done(err); }

		  		// if the user exists
		  		if(user) { 
		  			done(null, user);
		  		}
		  		// otherwise create a new user
		  		else {
		  			var user = new User({
		  				facebookId: profile.id,
		  				name: profile.displayName
		  			});
		  			user.save(function(err) {
				  		if(err) { return done(err); }
				  		done(null, user);
		  			});
		  		}
		  	})
		  }
		));

1. Add methods to serialize and deserialize the user:

		passport.serializeUser(function(user, done) {
		  done(null, user.id);
		});

		passport.deserializeUser(function(id, done) {
			User.findById(id, function (err, user) {
		    done(err, user);
		  });
		});

1. Add two configuration routes:

		// Redirect the user to Facebook for authentication.  When complete,
		// Facebook will redirect the user back to the application at
		//     /auth/facebook/callback
		app.get('/auth/facebook', passport.authenticate('facebook'));

		// Facebook will redirect the user to this URL after approval.  Finish the
		// authentication process by attempting to obtain an access token.  If
		// access was granted, the user will be logged in.  Otherwise,
		// authentication has failed.
		app.get('/auth/facebook/callback', 
		  passport.authenticate('facebook', { successRedirect: '/',
		                                      failureRedirect: '/login' }));

1. Define isAuthenticated middleware:

		var isAuthenticated = function(req, res, next) {
			if(req.isAuthenticated()) {
				next();
			}
			else {
				res.redirect('/');
			}
		}

1. Add isAuthenticated to middleware of any route you want to protect:

		app.get('/user', isAuthenticated, function(req, res) {
			...
		})
