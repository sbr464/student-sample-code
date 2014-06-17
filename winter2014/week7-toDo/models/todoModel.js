var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

var TodoModel = module.exports = mongoose.model('todo', TodoSchema);