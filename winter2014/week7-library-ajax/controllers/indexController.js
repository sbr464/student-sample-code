var BookModel = require('../models/bookModel');

module.exports = {
  index: function(req, res){
    BookModel.find({}, function(err, docs){
      
      res.render('index', {
        title: 'Book List',
        books: docs
      });
      
    });
  }
};