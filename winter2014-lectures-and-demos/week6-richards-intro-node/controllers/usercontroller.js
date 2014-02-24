
/*
 * User Controller
 */

var UserModel = require('../models/usermodel');

var UserController = module.exports = {

  list: function(req, res){
    UserModel.find({}, function (err, docs) {
      console.log('users', docs);
      res.render('users/list', {users:docs});
    });

    
  },

  detail: function (req, res) {
    UserModel.findById(req.param('id'), function (err, doc) {
      res.render('users/detail', {user:doc});
    });
    
  },

  create: function (req, res) {

  },

  update: function (req, res) {
    
  },

  delete: function (req, res) {}

};




