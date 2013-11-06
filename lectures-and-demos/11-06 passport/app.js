
/**
 * Module dependencies.
 */

var express = require('express')
	, routes = require('./routes')
	, user = require('./routes/user')
	, http = require('http')
	, path = require('path')
	, passport = require('passport')
	, FacebookStrategy = require('passport-facebook').Strategy
	, mongoose = require('mongoose')

var app = express();

// all environments
app.set('port', process.env.PORT || 3006);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.cookieSession({ secret: '12345' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

// database connection
mongoose.connect('mongodb://localhost/refactoru-passport-test')

// models
var User = mongoose.model('User', {
	facebookId: Number,
	name: String
})

// passport
passport.use(new FacebookStrategy({
    clientID: '228574233978335',
    clientSecret: '91f376259a2393ca0fd7125ce143aaa2',
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

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function (err, user) {
    done(err, user);
  });
});

// routes
// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { successRedirect: '/user',
                                      failureRedirect: '/' }));

app.get('/', function(req, res) {
	res.render('index', { isAuthenticated: req.isAuthenticated() });
})

app.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
})

var isAuthenticated = function(req, res, next) {
	if(req.isAuthenticated()) {
		next();
	}
	else {
		res.redirect('/');
	}
}

app.get('/user', isAuthenticated, function(req, res) {
	User.findById(req.session.passport.user, function(err, user) {
		if(err) { 
			console.log(err); 
			res.send(500, 'Error finding logged in user: ' + req.session.passport.user)
		}
		else {
			res.render('user', { 
				user: user
			});
		}
	})
})

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
