
// Long way: document ready
// $(document).on('ready', function() {

// Short way: document ready
$(function(){
  
  // Register listener/handler for "click"
  // event on all buttons
	$('button').on('click', function(e){
		console.log('e:', e);
	});

	// Short-hand definition of events
	$('button').click(function(){
		console.log('Another test for clicks');
	});

	// Prevent default browser behavior, like navigating to a new page
	$('a').on('click', function(e) {
		e.preventDefault();

		// This does the same thing, but has jQuery do it for us
		// return false;
	});

	// Without a context specified, "this" will become
	// the window or document (depending on if you are inside
	// of document.ready or not)
	console.log('This onLoad:', this);

	$('button').on('click', function(){
		console.log('Button Click:', this);

		// "this" is a dom element, so we need to wrap it in jQuery
		// to be able to use jQuery functionality
		var buttonValue = $(this).text();
		console.log('Button Text:', buttonValue);
	});


	// Non-delegated event that creates new dom elements.
	// The original query to attach the event handler is NOT
	// auto-updating with each new element that is created, which
	// means that these newly created buttons won't receive the event
	// registration because it has already gone through. This is a situation
	// where delegating events is useful.
	$('.delegates button').on('click', function(){
		console.log( $(this).text() );
		$('.delegates').append('<button>Btn ' + Math.random() + '</button>');
	});
	$('.delegates').append('<button>Test</button>');
	
	
	// A fake delegated event. This listens for all clicks on the
	// document, which can include clicking white space or even other
	// elements. This means that our initial query doesn't run into the
	// same issues as above because the elements that match the query never
	// actually change (ie. document)
	$(document).on('click', function(e){
		// Since this fires on any element clicked on, let's be
		// more specific in saying WHICH elements matter.
		// In this example, we check if the clicked element that fired
		// the event is of type Button. If so, perform the actions, and
		// otherwise, do nothing. This is a super basic version of what
		// goes on behind-the-scenes in jQuery
		if(e.target.nodeName === 'BUTTON'){
			console.log(e.target.nodeName);
			$('.delegates').append('<button>Btn ' + Math.random() + '</button>');
		}
	});
	
	// A jQuery delegated event. Very similar to above, but lets
	// us use short hand to declare the event and also allows
	// usage of the regular jQuery selectors to check at click time.
	$(document).on('click', '.delegates button', function(){
		$('.delegates').append('<button>Btn ' + Math.random() + '</button>');
	});
	
	// Since the handler part of events are just functions,
	// we can break the logic out into a variable and just pass
	// it to the registration method "on" as a reference
	var myHandler = function(){
		console.log('My Handler');
	};

	// Use our predefined function to handle both click
	// and mouseover on the .delegates element.
	$('.delegates').on('click', 'button', myHandler);
	$('.delegates').on('mouseover', 'button', myHandler);


	// Sample of hover handler
	$('.delegates').hover(
		// mouseover
		function(){
			$(this).css('backgroundColor', 'red');
		},

		// mouseout
		function(){
			$(this).css('backgroundColor', '');
		}
	);

	// long way for same as above
	$('.delegates').on('mouseover', function(){
		$(this).css('backgroundColor', 'red');
	});
	$('.delegates').on('mouseout', function(){
		$(this).css('backgroundColor', '');
	});

});









// Sample callback structure
/*
var adder = function(a, b) {
	return a + b;
};
var subtracter = function(a, b){
	return a - b;
};

console.log('Adder(5,10):', adder(10, 5)); // = 15


var testFunc = function(a, b, c) {
	// console.log('a:', a)
	// console.log('b:', b)
	// console.log('c:', c)
	return a(b, c);
};

console.log('Test Func:', testFunc( subtracter, 20, 50 ));
*/