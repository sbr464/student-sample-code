var mongoose = require('mongoose');

var EntertainerModel = module.exports = mongoose.model('entertainer', {
  name:String,
  age: Number,
  job: String
});
