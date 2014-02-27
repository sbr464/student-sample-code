$(function(){
  $('.delete').change(function(){
    if($(this).is(':checked')){
      var currentItem = $(this).closest('.bookItem');
      var bookId = currentItem.data('id');
      $.get('/book/removeAjax/'+bookId, function(data){
        console.log('Done: ', data);
        if(!data){
          currentItem.remove();
        }
      });
    }
  });
});