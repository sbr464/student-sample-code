var index = 0;
var addButton = function(){
	var cls = (index%2===0)?'default':'primary';
	$('body').append(
		'<button class="btn btn-'+cls+'">Button ' + index + '</button>'
	);
	index++;
};

$(document).on('ready', function() {

	// Attach listener/handler to all buttons that
	// ALREADY exist on the page when this line
	// is executed
  /*$('button').on('click', function(e){
  	console.log('Hey!');
  });*/
	
	// This will fire on ALL elements in
	// the document regardless of when they
	// were created.
	/*$(document).on('click', function(e){
		console.log('hey:', e.target);
	});*/
	
	// This will fire on ALL elements in
	// the document regardless of when they
	// were created. However, because our
	// if statement is looking specifically
	// for a certain class, only those elements
	// that match the condition will actually fire
	// the "button says hey" message.
	/*$(document).on('click', function(e){
		console.log('click happened!', e.target);
		if( $(e.target).hasClass('btn') ){
			console.log('button says hey');
		}
	});*/
	
	// This will "wait" until click-time to check if the
	// clicked element (much like the above example) matches
	// the selector we pass as the second argument into the "on"
	// method.
	$(document).on('click', '.btn.btn-primary', function(e){
		console.log('button says hey:', e.target);
	});

});