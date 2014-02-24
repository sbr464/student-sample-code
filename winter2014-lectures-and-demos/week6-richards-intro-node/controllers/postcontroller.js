
/*
 * Post Controller
 */

var PostModel = require('../models/postmodel');

var PostController = module.exports = {

  list: function(req, res){
    var posts = PostModel.findAll();

    res.render('posts/list', {posts:posts});
  },

  detail: function (req, res) {
    var post_id = req.param('id');
    var post = PostModel.findById(post_id);
    var comments = CommentModel.findAll({post_id:post_id});

    if (!post) {
      return res.render(404, 'notfound');
    }

    res.render('posts/detail', {post:post, comments:comments});
  },

  create: function (req, res) {},

  update: function (req, res) {},

  delete: function (req, res) {}

};




