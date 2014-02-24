var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name:String,
  age: Number
});

var UserModel = module.exports = mongoose.model('user', UserSchema);