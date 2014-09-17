/**
 * Wait for the document to be all ready
 * before we start utilizing our jQuery code
 */
$(document).on('ready', function() {
  
	////////////////
	// SELECTORS //
	////////////////
	
	$('strong');         // -> find all strong tags in document
	$('.list-item-alt'); // -> find all elements with list-item-alt class
	$('#main-content');  // -> find all elements with ID of main-content
	$('p strong');       // -> find all strong tags inside of p tags
	
	// Since the selectors are just strings, we can use variables in their place:
	var listSelector = 'li';
	$(listSelector); 			 // -> will return all li's on the page

	var results = $('strong'); // -> find all strong tags and save result in variable
	
	// Chaining operations:
	$('li').width(100).height(100);

	///////////////////
	// MANIPULATION //
	///////////////////
	
	$('input').width();     // -> get the width of elements
	$('input').width(150);  // -> set the width of elements
	$('input').height();    // -> get the height of elements
	$('input').height(150); // -> set the height of elements

	$('p').css('display');      // -> get the css display property
	$('p').css('fontSize', 30); // -> set the css display property
	$('p').css({
	  color: 'blue',
	  fontSize: 10,
	  textDecoration: 'underline'
	});              // -> use an object of key-value pairs to set multiple css properties


	////////////////
	// ANIMATION //
	////////////////
	
	$('p').show();        // -> instant show
	$('p').hide();        // -> instant hide (display: none)
	$('p').hide(10000);   // -> give show or hide a duration to animate
	
	$('p').fadeIn();      // -> give a duration to fade items in over time (has default duration)
	$('p').fadeOut();     // -> give a duration to fade items out over time (has default duration)
	$('p').fadeToggle();  // -> give a duration to fade items in/out over time (has default duration)
	
	$('p').slideUp();     // -> Slide element height up (has default duration and can be set)
	$('p').slideDown();   // -> Slide element height down (has default duration and can be set)
	$('p').slideToggle(); // -> Toggle slide (has default duration and can be set)
	
	$('p').animate({
			fontSize: 30,
			padding: 50
	}, 1000); 			      // -> Transition multiple properties over time
	

	/////////////////////////////
	// CONTENT AND ATTRIBUTES //
	/////////////////////////////
	
	$('li').addClass('my-new-class');            // -> add a class to the matched elements
	$('li').removeClass('my-new-class');         // -> remove a class from the matched elements
	$('li').toggleClass('my-new-class');         // -> toggle a class in the matched elements
	
	$('h1').text();                              // -> get non-formatted text content
	$('h1').text('Hello world');                 // -> set non-formatted text content
	
	$('p').html();                               // -> get html content
	$('p').html('Hello <strong>world</strong>'); // -> set html content
	
	// NOTE: The "val" method is specific to input elements
	$('input').val();                            // -> get the value of the field
	$('input').val('new value');                 // -> set the value of the field
	
	$('p').attr('id');                           // -> get the html attribute's value
	$('p').attr('id', 'new-id');                 // -> set the html attribute's value
});