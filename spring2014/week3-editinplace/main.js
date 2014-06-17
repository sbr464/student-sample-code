$(document).on('ready', function() {
  
  // initialize editable items
  $('.editable').on('click', function(){
    // because we need access to "this" in
    // our blur handler below, we need to
    // protect the value in a variable
    var original = $(this);

    // hide the element...
    $(this).hide();

    // create a new text area (using jquery)
    var textArea = $('<textarea></textarea>');
    $(this).after(textArea);

    // fill the text area with content from element
    //    get the value from the clicked element
    var textVal = $(this).text();
    //    set the new textarea value to the stored
    //    text
    textArea.val( textVal.trim() );

    // listen for "blur" on textarea
    textArea.on('blur', function(){
      // $(this) from above has been hidden by
      // the new context of the textarea that was
      // blurred.
      
      // store new text into original clicked item
      //    original.text( $(this).val() )
      original.text( textArea.val() );

      // remove the textarea
      textArea.remove();

      // show the original item
      original.show();
      
    });
  });

});