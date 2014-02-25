$(function() {
	$(document).on('click', '.item-add', function() {
	  var id = $(this).closest('.item').attr('data-id');
	  $.post('/items/add/' + id, function(data) {
	    console.log(data);
	  })
	})
});