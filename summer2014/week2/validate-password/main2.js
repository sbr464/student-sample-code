$(document).on('ready', function() {

	// validation functions

	// Return true if the given string is at least 8 characters.
	var min8 = function(val) {
		return val.length >= 8;
	};

	// Return true if the given character is uppercase.
	var isUpperCaseLetter = function(chr) {
		var charCode = chr.charCodeAt(0);
		return charCode >= 65 && charCode <= 90;
	};

	// Return true if the given string contains an upper case letter.
	var hasUpperCase = function(val) {

		// loop through each character of val
		// for each character:
		for(var i=0; i<val.length; i++) {
			//   if the character is upper case, return true
			if(isUpperCaseLetter(val[i])) {
				// and skip the rest of the string
				return true;
			}
			// otherwise, keep looking
		}

		// after the loop (if we haven't returned yet) then there must be no upper case letter, so return false.
		return false;
	};

	var validate = function(str, validationFunction, validationMessage) {
		var validationCharacter;
		var validationState;

		if(validationFunction(str)) {
			validationCharacter = '✓';
			validationState = 'valid';
		}
		else {
			validationCharacter = '✗';
			validationState = 'invalid';
		}
		// $('#password-validation').append('<div class="' + validationState + '">' + validationCharacter + ' You must enter at least 8 characters.</div>');
		var messageEl = $('<div>');
		messageEl.addClass(validationState);
		messageEl.append(validationCharacter + ' ' + validationMessage);
		$('#password-validation').append(messageEl);
	}

	// validate password on input change
	$('#pwd').on('input', function() {

		$('#password-validation').empty();
		var inputPassword = $(this).val();
		
		validate(inputPassword, min8, 'You must enter at least 8 characters.');
		validate(inputPassword, hasUpperCase, 'Must include an uppercase letter');

	})
  
});