$(document).on('ready', function() {
  
	// EVENT HANDLERS
	$('#signup-form').on('submit', function() {
		
		$('.valid').removeClass('valid');
		$('.invalid').removeClass('invalid');

		var isValid = true;

		if($('#name').val() === '') {
			$('#name').closest('.form-group').addClass('invalid');
			isValid = false;
		}
		else {
			$('#name').closest('.form-group').addClass('valid');
		}

		if($('#email').val() === '') {
			$('#email').closest('.form-group').addClass('invalid');
			isValid = false;
		}
		else {
			$('#email').closest('.form-group').addClass('valid');
		}

		if(isValid) {
			var thankyou = $('<div class="mega-announce">Thank you!</div>');
			$('body').append(thankyou);
			thankyou.hide();
			thankyou.fadeIn(2000).delay(2000).fadeOut(function() {
				$('.valid').removeClass('valid');
				$('.invalid').removeClass('invalid');
				$('#signup-form')[0].reset();
			});
		}

		return false; // e.preventDefault();
	});

});