var load = function() {

	var enbiggen = function(e) {
		$('#main-heading').css('font-size', '+=25');

		e.preventDefault();
	};

	/*
	// CALLBACKS

	// setTimeout(enbiggen, 4000);
	setTimeout(enbiggen, 4000);

	// enbiggen();
	// setTimeout(undefined, 4000);
	*/

	var printMessage = function(e) {
		if(e.keyCode === 65) {
			$('#message-box').text('You pressed a! That\'s my favorite letter!');
		}
		else {
			$('#message-box').text('You pressed some boring letter.');
		}

		if(e.keyCode === 13) {
			e.preventDefault();
			// return false
		}
		// var boxText = $('#message-box').text();
		// $('#message-box').text(boxText + 'A key was pressed!');

		// reference element that fired the event
		//console.log( $(this) );
	};

	$('#enbiggen').on('click', enbiggen);
	// $('#enbiggen').click(enbiggen);

	$('#name').on('keydown', function() {

	});
};

$(document).ready(load);
/*$(document).on('ready', function() {

});*/
