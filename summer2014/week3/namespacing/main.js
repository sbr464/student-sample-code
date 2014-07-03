// GLOBALS
// var name = 'RefactorU';

// var getData = function() {
// 	return ['Robby', 'Alice', 'Gene', 'Frederick', 'Eleanor'];
// };

/* Technique #1: Namespacing
- Using an object for the purpose of encapsulation. To use, convert global variables into properties on an object literal.
- Namespacing does not change the privacy (who can access the variable) it just wraps it in an object.
*/
// var App = {
// 	// var name = 'RefactorU';
// 	name: 'RefactorU',

// 	getData: function() {
// 		return ['Robby', 'Alice', 'Gene', 'Frederick', 'Eleanor'];
// 	}

// };

// Real-world example:
// $(document).on('ready', function() {
// 	App.init();
// 	App.setupEvent();
// 	App.renderTable();
// })

/* Technique #2: Revealing Module Pattern */
var AppFunction = function() {

	// private
	var name = 'RefactorU';

	var getData = function() {
		return ['Robby', 'Alice', 'Gene', 'Frederick', 'Eleanor'];
	};

	var welcome = function(thing) {
		console.log('Welcome ' + thing + '!');
	};

	// return an object literal, containing properties of only the variables or functions which we want to reveal
	return {
		'getData': getData,
		'welcome': welcome
	}
};

var App = AppFunction();

/* Technique #2.1: Revealing Module Pattern with Immediately Invoked Function Expression (IIFE */
/*var App = (function() {

	// private
	var name = 'RefactorU';

	var getData = function() {
		return ['Robby', 'Alice', 'Gene', 'Frederick', 'Eleanor'];
	};

	var welcome = function() {
		console.log('Welcome ' + name + '!');
	};

	// return an object literal, containing properties of only the variables or functions which we want to reveal
	return {
		'getData': getData,
		'welcome': welcome
	}
})();
*/