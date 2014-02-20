
/*
 * User Controller
 */

var UserModel = require('../models/usermodel');

var UserController = module.exports = {

  list: function(req, res){
    var users = UserModel.findAll();

    res.render('users/list', {users:users});
  },

  detail: function (req, res) {
    res.render('users/detail');
  },

  create: function (req, res) {},

  update: function (req, res) {},

  delete: function (req, res) {}

};




