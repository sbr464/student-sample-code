$(function() {

	$(document).on('click', '.container', function(e) {
		console.log('container');
		$('.inner').append($('.button:first').clone(true));
	});

	// $('.button').on('click', function(e) {
	$(document).on('click', '.button', function(e) {
		e.stopPropagation();
		e.preventDefault();
		console.log('mybutton');
	});

});
