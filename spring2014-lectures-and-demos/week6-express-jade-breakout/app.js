// Pull in the express lib to use for our app
var express = require('express');

// We need the FileSystem lib in order to pull in
//  files (as seen in get(/main.css))
var fs = require('fs');

// Initialize the application using express
var app = express();

// We need to tell express that we'll be using
//  Jade as a render engine and that views can
//  be found in the views folder
app.set('views', './views');
app.set('view engine', 'jade');

// We used this to test res.send(ourPizza);
var ourPizza = {
  toppings: [
    'pepperoni',
    'mushrooms',
    'olives',
    'chives'
  ],
  size: 'super large',
  sides: ['soda', 'ranch']
};

// Route for our main view 
//  (visiting http://localhost:3000)
app.get('/', function(req, res){
  // Define any variables that will be available
  //  to our rendered template
  var pageVars = {
    title: 'Home Page'
  };

  // Render the template and pass the context
  //  defined above
  res.render('index', pageVars);
});

// Route for the /test view
app.get('/test', function(req, res){

  // While similar to the way we passed a context
  //  above (/ route), we just short-hand and skip
  //  the interim variable by passing a raw object
  //  literal in the call itself
  res.render('test', {
    title: 'Test Page'
  });
});

// NOTE: This weird system for comments
//        is a fun way to be able to toggle
//        between two sets of functionality.
//        Add a / before the first /* to see
//        it in action!

/*
// Here is the built-in express static magic.
// It will serve all files in the public directory
// as-is and generate proper file type, etc.
app.use(express.static('./public'));
/*/

// This is the hand-coded static file route for main.css
app.get('/main.css', function(req, res){
  // First we read in the file at the given path
  fs.readFile('./public/main.css', function(err, fileContents){
    // When completed, fs will call this method and pass it
    //  any errors that occured and the contents of the file
    //  if found.
    
    // Before sending the file to the client,
    // we need to let the client know what type of
    // file it is
    res.header('Content-Type', 'text/css');

    // Finally, we end the response by sending back
    // the actual contents of the file. Check the
    // inspector's network tab to see more info about
    // requests and responses being made.
    res.send(fileContents);
  });
});

// Similar to above, but for main.js
app.get('/main.js', function(req, res){
  fs.readFile('./public/main.js', function(err, fileContents){
    res.header('Content-Type', 'text/javascript');
    res.send(fileContents);
  });
});
//*/

// Start the server!
app.listen(3000);