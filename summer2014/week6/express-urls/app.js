var express = require('express');

// Require our controller for our 'view' route
var indexController = require('./controllers/indexController.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// This route is pretty much unused
app.get('/', function(req, res) {
	res.render('index');
});

// Handle incoming requests to the 'home' page
app.get('/home', function(req, res) {
  // Show (in terminal) the request object
  console.log('req:', req);

  // Send the querystring values to the page:
  //  Express contains special parsers to read
  //  out any information sent from the client.
  //  The query property reads key-value pairs from
  //  the url, like: http://localhost:1111?mykey=myvalue
  //  This will give an object like:
  //  {mykey: 'myvalue'}
  //  which forces conversion to strings.
  // res.send(req.query);
  
  // Render the view with hard-coded values
  // res.render('index', {
  //   title: 'Test Page is Testing',
  //   description: 'A test page for url things'
  // });
  
  // Render the same view using the properties
  //  given in the URL: ?title=my title&description=my description
  // res.render('index', {
  //   title: req.query.title,
  //   description: req.query.description
  // });
  
  // hardcoded set of values to choose from
  var items = [
    'Mustang',
    'Soda',
    'Ice Cream',
    'Something'
  ];

  // hardcoded set of valid descriptions
  var descriptions = [
    'A car',
    'A drink',
    'A treat',
    'Generic whatever'
  ];

  // Take in the "itemId" from the ?itemId=0
  // and convert it to a number.
  var requestedIndex = +req.query.itemId;

  // pull that index out of the 'items' array
  var actualItem = items[requestedIndex];

  // calculate the desired next index by adding
  // 1 to our current index
  var nextIndexJS = requestedIndex + 1;

  // pull the same index out, but this time from our
  // description set
  var itemDescription = descriptions[requestedIndex];

  // Render our index.jade view and pass it information
  // about the title, description, and index of the next item
  res.render('index', {
    title: actualItem,
    nextIndex: nextIndexJS,
    description: itemDescription
  });
});

// This line is loaded with functionality:
//  First, we define this as a 'get' route
//  Next, the url contains a variable. Normally
//    we define our route as just '/view', but in
//    this case we want to support the user viewing
//    /view/1 and /view/2 and /view/3 WITHOUT having
//    to create brand new route-handlers for each.
//    Express sees this ':dataId' as a wildcard variable
//    which will support any string the user enters
//    as the second part of this url, thus supporting
//    many routes with one handler.
//  Finally, we pass this off to the required controller's
//    method.
app.get('/view/:dataId', indexController.view);

var server = app.listen(9980, function() {
	console.log('Express server listening on port ' + server.address().port);
});
