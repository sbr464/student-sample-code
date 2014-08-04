var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  user: String,
  subject: String,
  message: String
});

module.exports = mongoose.model(
  'message', messageSchema
);