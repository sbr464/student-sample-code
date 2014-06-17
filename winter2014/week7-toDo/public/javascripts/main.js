$(function(){

  // NEW ITEM FORM SUBMIT
  $('#new-item').submit(function(e){
    // PREVENT THE FORM FROM SUBMITTING
    e.preventDefault();

    // GRAB THE INPUTTED TITLE FROM THE FORM
    var title = $('#new-title').val();

    // RUN AN AJAX POST TO THE ADDITEM ROUTE
    $.post('/addItem', {title: title}, function(data){
      console.log('Data: ', data);

      // APPEND THE RETURNED ITEM TO THE DOM
      // (this will contain the successfully saved database object)
      $('#items').append('<li>' + data.title + '</li>');

      // CLEAR OUT THE INPUT FIELD
      $('#new-title').val('');
    });
  });


  // HANDLE FILTER KEYUP
  $('#filter-field').keyup(function(e){

    // GET THE FILTER TERM FROM THE FILTER FIELD
    var searchVal = $(this).val();

    // RUN AN AJAX POST TO THE FILTER ROUTE
    // PASS THROUGH AN OBJECT THAT CONTAINS THE CURRENT FILTER CONTENT
    $.post('/filter', {term: searchVal}, function(data){

      // CLEAR OUT THE UL OF ITEMS
      $('#items').empty();

      for(var i = 0; i < data.length; i++){
        var todo = data[i];
        // APPEND EACH NEWLY FILTERED RESULT TO THE UL
        $('#items').append('<li>' + todo.title + '</li>');
      }
    });

  });
});