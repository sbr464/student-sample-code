// Require our data model
var itemsModel = require('../models/itemsModel.js');

// Define the actual controller logic
var indexController = {

  // Add our view handler to support the '/view/:dataId'
  //  route from our app.js
  view: function(req, res) {
    // Log the request object to terminal
    console.log(req);

    // Calculate the index from the url parameter.
    //  When the url is '/view/1', req.params.dataId = 1
    //  When the url is '/view/2', req.params.dataId = 2
    var requestedIndex = +req.params.dataId;

    // Calculate the next item in the set
    var nextIndexJS = requestedIndex + 1;

    // Find this specific index in our data model
    var viewItem = itemsModel[requestedIndex];
    
    // Render the view using the values calculated above
    res.render('view', {
      title: viewItem.title,
      description: viewItem.desc,
      nextIndex: nextIndexJS
    });
  }
};

// Make this available to requires
module.exports = indexController;