$(document).on('ready', function() {
  
  // define sample data (this would normally come from an Ajax request)
	var forecasts = [
		{ day: 'Monday', temp: 81 },
		{ day: 'Tuesday', temp: 70 },
		{ day: 'Wednesday', temp: 75 },
		{ day: 'Thursday', temp: 72 },
		{ day: 'Friday', temp: 80 },
		{ day: 'Saturday', temp: 69 },
		{ day: 'Sunday', temp: 68 }
	];

	// retrieve Handlebars template from DOM
	var weatherTemplate = $('#weather-template');
	var templateText = weatherTemplate.html();

	// compile template into rendering function
	// Handlebars.compile takes a Handlebars template in the form of a string, and returns a function which renders the template.
	var renderWeather = Handlebars.compile(templateText);

	for(var i=0; i<forecasts.length; i++) {

		forecasts[i].hot = forecasts[i].temp >= 80;

		// call the render function with the view data in order to generate the final HTML
		var outputHtml = renderWeather(forecasts[i]);

		// append that html to the DOM
		$('#forecasts').append(outputHtml);
	}


});