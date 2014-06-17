//$(document).on('ready', ...)
$(function() {

	//$('.hey-button').on('click', function() {
	$(document).on('click', '.hey-button', function () {
		alert('Hey!');
	});

	// $(document).on('click.customNamespace', ...);
	// $(document).off('click.customNamespace');

	$('#add-button').on('click', function() {
		var newButton = $('<a href="#" class="button hey-button">GO</a>');
		$('#go-button-container').append(newButton);
	})

});
