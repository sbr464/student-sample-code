console.log('============ THE SOLUTION: ASYNC.JS ===========');

// To demonstrate how you might solve this with a module,
// let's look at how async.js handles the situation...
var async = require('async');

var data = [
    {name: 'Chris'},
    {name: 'Raine'},
    {name: 'Sean'},
    {name: 'Dorian'}
];

// Async will loop over an array of functions that
// each take in a single argument, a callback, and
// will execute them until each callback has returned data.

var buildAsync = function(original){
    // Because asyncjs expects to invoke functions
    // that only take a single parameter, we use this
    // opportunity to force a closure using the buildAsync
    // function and having it hold on to the original values.
    // The returned anonymous function will be executed by
    // async.
    return function(onComplete){
        setTimeout(function(){
            console.log('timeout original:', original);

            // Perform some action here if we need to
            original.completed = true;

            // Call the async callback by passing
            // it (error, result), so in our case,
            // no error can send back null.
            onComplete(null, original);
        }, Math.random() * 10000);
    };
};

// Use async's parallel method which will run
// an array of functions all at once. Use serial
// to run them one after the other, or waterfall
// to have the return chain to the next function
// call...
async.parallel(
    // pass an array of built functions
    data.map(buildAsync),

    // this last function will be executed when
    // all the async functions are done
    function(err, results){
        console.log('err:', err);
        console.log('results:', results);
    }
);
