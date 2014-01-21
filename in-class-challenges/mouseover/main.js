$(document).on('ready', function() {


	$('#mylink').on('mouseover', function() {
		//$('#mylink').css('color', 'pink');
		$(this).css('color', 'pink');
	});

	$('#mylink').on('mouseout', function() {
		$(this).css('color', 'black');
	});


});