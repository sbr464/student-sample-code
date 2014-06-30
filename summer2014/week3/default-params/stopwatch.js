// #1
var stopwatch = function(hours, minutes, seconds) {
	hours = hours || 0;
	// if(!hours) {
	//	hours = 0;
	//}
	minutes = minutes || 0;
	seconds = seconds || 0;

	console.log(hours, minutes, seconds)
	// return hours + ':' + minutes + ':' + seconds;
}

// #2
// GETTER: var color = $('.button').css('color')
// SETTER: $('.button').css('color', 'red')
// el.css
// el.width

var href = function(el, url) {
	// if(arguments.length === 2)
	if(url) {
		el.attr('href', url);
	}
	else {
		return el.attr('href');
	}
}

// GETTER
var myUrl = href( $('.myLink') );

// SETTER
href( $('.myLink'), 'http://google.com' );


