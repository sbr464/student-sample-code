// Import the model containing the message data
var MessageModel = require('../models/messageModel.js');

// Define the index controller methods
var indexController = {

  // Our home page. Will just render the forms.
  index: function(req, res) {
    res.render('index');
  },

  // A post request handler to take in message
  // data and save it out to the database
  addMessage: function(req, res) {
    // Pull the data from the posted form
    var userName = req.body.name;
    var subject = req.body.subject;
    var message = req.body.message;

    // Create a new instance of a
    // message model and fill it with
    // the data from the form.
    var newMessage = new MessageModel({
      user: userName,
      subject: subject,
      message: message
    });

    // Save the message to the database
    newMessage.save(function(err, result) {
      // On successful call to mongoose,
      // send back any error and any results
      // to the client
      res.send({
        error: err,
        result: result
      });
    });
  },

  // A GET request handler to send back all the
  // messages associated with a given user name
  getMessages: function(req, res) {
    // Pull the user from the GET request's
    // query string
    var requestedUser = req.query.user;

    // Search the database for any messages
    // that match the given user name
    MessageModel.find(
      {
        user: requestedUser
      },
      function(err, results) {
        // Just send back any results
        // to the client.
        res.send(results);
      }
    );
  }
};

module.exports = indexController;