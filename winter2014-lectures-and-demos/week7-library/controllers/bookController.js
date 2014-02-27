var BookModel = require('../models/bookModel');

module.exports = {
  index: function(req, res){
    // res.send('Hello book!');
    res.render('bookForm', {
      title: 'Add New Book'
    });
  },
  add: function(req, res){
    var formData = req.body;

    // SHORT HAND: Because the formData
    // variable is already in the object (key-value)
    // notation that mongoose requires
    // var book = new BookModel(formData);
    
    // LONG WAY: We hand-format our input data
    var book = new BookModel({
      title: formData.title,
      author: formData.author,
      yearPublished: formData.yearPublished
    });

    book.save(function(err, doc){
      // PRINT OUT THE NEW DB OBJECT
      // res.send({
      //   err: err,
      //   doc: doc
      // });
      
      // SEND THE USER BACK TO THE FORM
      res.redirect('/book');
    });
  },
  get: function(req, res){
    var bookId = req.params.id;
    // BookModel.findOne({_id: bookId})
    BookModel.findById(bookId, function(err, doc){
      res.send(doc);
    });
  },
  remove: function(req, res){
    var bookId = req.params.id;
    
    BookModel.remove({_id: bookId}, function(err, doc){
      res.redirect('/');
    });
  }
}