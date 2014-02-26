var TodoModel = require('../models/todoModel');

module.exports = {
  index: function(req, res){
    TodoModel.find({}, function(err, docs){
      res.render('index', {todos: docs});
    });
  },
  addItem: function(req, res){
    console.log(req.body);
    // USE THE FORM DATA, PASSED THROUGH VIA THEIR 'name' ATTRIBUTES
    // AND CREATE A NEW TODO ITEM WITH THAT DATA
    var todo = new TodoModel(req.body);

    // SAVE...
    todo.save(function(err, doc){
      console.log(err);
      console.log(doc);

      // AND SEND TO THE CLIENT WHEN COMPLETE
      res.send(doc);
    });
  },
  filter: function(req, res){
    var term = req.body.term;

    // USE THE JAVASCRIPT REGEXP TO ALLOW US TO USE PATTERN-MATCHING
    // INSTEAD OF '==='. THE 'i' REPRESENTS A FLAG TO IGNORE CASE.
    TodoModel.find({title: new RegExp(term, 'i')}, function(err, docs){

      //SEND BACK THE FILTERED RESULTS
      res.send(docs);
    });
  }
};