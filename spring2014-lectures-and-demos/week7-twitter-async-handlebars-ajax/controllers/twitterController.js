var twitter = require('twitter');
var _ = require('underscore');
var async = require('async');

// create an instance of the twitter api with given credentials
var twit = new twitter({
    consumer_key: 'JcLNyF44THBsjhZzIHAn2jfqQ',
    consumer_secret: '6lEB7ariJGOwif2QWu8CEuAjwpAUbvLX7ulldKUQNTaw0RgWCw',
    access_token_key: '16570869-BoGxSqrv0rryXhRAc2G75Ns5TDphoWG8fPeboMhGb',
    access_token_secret: 'PWte1A6G90F5h7FgJDbTrcIrTZuzFQo7KTFtOllupyExv'
});

var getTimeline = function(name, done){
	twit.get(
		'/statuses/user_timeline.json', {
			'screen_name': name
		}, function(data) {
	    // Once we have the data from twitter,
	    // we'll call the done() method (parameter)
	    // and pass it the data
	    done(data);
	});
}

var twitterController = {
	// handle searches for twitter api
	search: function(req, res){
		// pull term from querystring
		var term = req.param('term');

		// if this comes in as comma separated, we'll need
		// to split out the individual names
		var names = term.split(',')
			// for each name in the given input...
			.map(function(item){
				// save the trimmed version (no left or right whitespace)
				return item.trim();
			});

		// using async, call getTimeline for each user
		var nameFunctions = names.map(function(name){
			// map over each name in the given array
			// and return an anonymous function that ASYNC
			// will call when it's ready to. This takes in
			// a single callback parameter so we can tell
			// ASYNC when our method has completed. Call of this
			// will be delayed until ASYNC is ready
			return function(next){
				// when async calls this method, it will
				// run the following code to make a request to
				// twitter to get the timeline of the scope'd "name"
				// variable, and when that has completed, we'll call
				// the ASYNC callback "next" and pass it our results
				getTimeline(name, function(tweets){
					// this ASYNC callback takes two arguments:
					// first, any errors, and second, the data to hold onto
					next(null, tweets);
				});
			}
		});

		// at this point, our nameFunctions variable is an array of functions
		// that ASYNC can call either in a series or in parallel.
		async.parallel(nameFunctions, function(err, results){
			// When this callback is called, err will contain any errors
			// encountered when ASYNC called our given functions stored in nameFunctions.
			// "results" will be an array of results from each callback.
			// In this case, results is an array of arrays of tweets, so we need to
			// flatten it down to a single array of tweets using underscore
			// flatten takes in an array of nested arrays and flattens it (at any depth)
			// down to a single output array
			res.send( _.flatten(results) );
		});
	}
}

module.exports = twitterController;

/*

Ok, so here's the problem:

		var names = ['Chris', 'Raine', 'Sean'];
		for(var i = 0; i < names.length; i++){
			coolApi.getData(names[i], function(data){
				console.log(data, names[i], i);
			});
		}

So what's the problem? Shouldn't that work just fine?

		Nope. We are running ASYNCHRONOUS calls inside a SYNCHRONOUS loop.

What.

		Let's break it down:

		// start the loop, initializing i to 0
		for(var i = 0; i < names.length; i++){
			// call getData and give it names[i] and an anonymous function
			// to call when it's done
			coolApi.getData(names[i], function(data){
				// when the callback is called, this will run
				console.log(data, names[i], i);
			});
		}

So the problem is that, if the process of getData() takes a little while
like, maybe, an http request, it will not execute the callbacks until
AFTER the loop itself has completed! The loop will make each call and then
just move on to the next iteration. THEN when the data comes back from the http requests
is when the callbacks will be called. So when each callback is run "i" will actually
be at the length of the array and names[i] will be undefined. Crap.


HOW DO WE FIX IT:

A couple ways:

1) Closure. Wrap our call in a temporary scope so that we don't lose access. Loops and Ifs
		don't create scope, so we need a function somewhere in here to make it work.

		var names = ['Chris', 'Raine', 'Sean'];
		for(var i = 0; i < names.length; i++){
			// create a closure call that handles name and i
			var tempFunc = function(closureName, closureI){
				// this scope is static, so will be available inside the callback
				coolApi.getData(closureName, function(data){
					console.log(data, closureName, closureI);
				});
			};
			// call the temp function with the given items
			tempFunc(names[i], i);
		}

		This can be shorthanded to:

		var names = ['Chris', 'Raine', 'Sean'];
		for(var i = 0; i < names.length; i++){
			(function(closureName, closureI){
				coolApi.getData(closureName, function(data){
					console.log(data, closureName, closureI);
				});
			})(names[i], i);
		}

2) Map. Essentially the closure system, but since map actually creates the closure for us,
		we don't need to make our own.

		var names = ['Chris', 'Raine', 'Sean'];
		names.map(function(name, i){
			coolApi.getData(name, function(data){
				console.log(data, name, i);
			});
		});

		Much shorter because the loop AND the closure are abstracted away. Sweet!

3) Async or Promises. The previous methods work great for our sample for loop, but what
		if we also need to send back a composite of all the data received by each call?
		We'd need to have some running total going, check on each callback to see if we
		are done with all the requests... awkward. Asyncjs and promises handle both the
		scope access issue and the issue of having the composite data and knowing when it
		is completed.


		Async example:

		var names = ['Chris', 'Raine', 'Sean'];
		var asyncMethodList = names.map(function(name){
			// async will call methods that it is passed: passedMethod(callback){}
			// and when the 'callback' is called by our code, async knows to move on
			// to whatever is next.
			var asyncCall = function(callback){
				// when async calls this method, kick off our api request
				coolApi.getData(name, function(data){
					// when the api call is done, call async's callback
					// with our data and any errors
					callback(null, data);
				});
			}
			return asyncCall;
		});

		// at this point, asyncMethodList is an array of ASYNC callable methods,
		// so call them in parallel.
		async.parallel(asyncMethodList, function(err, results){
			// at this point, all methods inside the given array have been
			// called and completed. Err contains any error encountered,
			// and results is an array of all items given to the ASYNC callbacks.
			res.send(results);
		});


So this is the dark-side of asynchronous coding, but a necessary evil
for all the good that comes from writing in node.

*/



