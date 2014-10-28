$(function() {

	for(var i=0; i<data.length; i++) {
		var item = $('<li>').text(data[i]);
		$('#cities').append(item);
	}

	$('#cities').append('<li>Shall I go on?</li>');

})
