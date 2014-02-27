$(function(){

	// SHORT-HAND POST REQUEST WITH DATA
	$.post('/api', {message: 'Hello from client!'},function(data){
		console.log(data);
	});

	// THE LONG-HAND VERSION OF THE ABOVE $.post
	$.ajax('/api', {
		type: 'post',
		data: {message: 'Hello from client!'},
		success: function(data){
			console.log(data);
		}
	});

	// PSEUDO-CODE SAMPLE OF SUBMITTING A FORM VIA AJAX
	// $('form').submit(function(e){
	// 	e.preventDefault();
	// 	$.post('/formSubmit', $(this).serialize(), function(data){
	// 		$('form').hide();
	// 		$('#success').show();
	// 	})
	// })
})