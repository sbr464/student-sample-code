$(document).on('ready', function() {

	/** Resets validation by clearing all validation classes. */
	var clearValidation = function() {
		$('.valid').removeClass('valid');
		$('.invalid').removeClass('invalid');
	};

	// STEPS FOR REFACTORING
	// 1. describe the discrete piece of functionality (verb)
	// 2. define a new function with that name
	// 3. Replace code with function call. Move code into new function.
	// 4. Replace other instances of code with function call.
	// 5. Parameterize the function with the differences. (The parts that are different, become the parameters)
	// 6. Call the function with the necessary arguments to reproduce the original functionality.
	// 7. Fix bugs from variables out of scope, etc

	/** Takes a jQuery object, adds the class valid or invalid depending on whether its empty, and returns true or false. Works for multiple inputs. */
	var validateInput = function(input) {
		var allValid = true;

		input.each(function() {
			var inputValid = $(this).val() !== '';
			$(this).closest('.form-group').addClass(inputValid ? 'valid' : 'invalid');

			// put cursor in the first input that is invalid
			// && allValid is needed to have this only work for the *first* input that is invalid
			if(!inputValid && allValid) {
				$(this)[0].focus();
			}

			// Update the allValid flag. If the current input is invalid, allValid will be changed to false
			// same as: allValid = allValid && inputValid
			allValid &= inputValid;
		})

		// use the '!!'' trick to convert allValid to a proper boolean
		return !!allValid;
	};

	/** Append a thank you announcement to the body and have it fade out after a couple seconds. When it finishes fading out, clear the validation and reset the form. */
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
				$('input')[0].focus();
			});
	};
 
	// EVENT HANDLERS

	/** When the form is submitted, clear the validation, re-check the validation, and say thank you only if everything is valid. */
	$('#signup-form').on('submit', function() {
		
		clearValidation();

		var isValid = validateInput($('[data-validation="required"]'));

		if(isValid) {
			sayThankyou();
		}

		// prevent the default browser behavior of submitting the form to the server
		return false;
	});

});