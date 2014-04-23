$(document).on('ready', function() {

	var clearValidation = function() {
		$('.valid').removeClass('valid');
		$('.invalid').removeClass('invalid');
	};

	// 1. describe the discrete piece of functionality (verb)
	// 2. define a new function with that name
	// 3. Replace code with function call. Move code into new function.
	// 4. Replace other instances of code with function call.
	// 5. Parameterize the function with the differences. (The parts that are different, become the parameters)
	// 6. Call the function with the necessary arguments to reproduce the original functionality.
	// 7. Fix bugs from variables out of scope, etc
	var validateInput = function(input) {
		var allValid = true;
		input.each(function() {
			var inputValid = $(this).val() !== '';
			$(this).closest('.form-group').addClass(inputValid ? 'valid' : 'invalid');
			allValid &= inputValid;
		})
		return !!allValid;
	};

	var sayThankyou = function() {
		var thankyou = $('<div class="mega-announce">Thank you!</div>');
		$('body').append(thankyou);
		thankyou
			.hide()
			.fadeIn(2000)
			.delay(2000)
			.fadeOut(function() {
				clearValidation();
				$('#signup-form')[0].reset();
			});
	};
 
	// EVENT HANDLERS
	$('#signup-form').on('submit', function() {
		
		clearValidation();

		var isValid = validateInput($('[data-validation="required"]'));

		if(isValid) {
			sayThankyou();
		}

		return false; // e.preventDefault();
	});

});