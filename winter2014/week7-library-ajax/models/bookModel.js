var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    trim: true
  },
  author: String,
  yearPublished: String
});

var BookModel = module.exports = mongoose.model('book', bookSchema);