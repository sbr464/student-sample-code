var request = require('request')
var json5 = require('json5')

// Represent a single running of an event at the Dairy Center
function Event(title, description, time) {
	this.title = title
	this.description = description
	this.time = time

}

Event.fromFlatArray = function(flatArray) {
	var newEvent = new Event(
		flatArray[5],
		flatArray[6],
		flatArray[7]
	);
	return newEvent;
}

// Parse the events from the given HTML from tickets.thedairy.org
Event.parseEvents = function(html) {
	var startSnippet = 'var articleContext = {';
	var endSnippet = 'createSearchMapping(articleContext);'

	var startIndex = html.indexOf(startSnippet) + startSnippet.length - 1
	var endIndex = html.indexOf(endSnippet) - 5

	var articleContextSnippet = html.slice(startIndex, endIndex);
	var articleContext = json5.parse(articleContextSnippet)

	var events = articleContext.searchResults.map(Event.fromFlatArray)

	return events;
}

// prototype method
// Event.prototype.parseEvents = ...
// var myEvent = new Event();
// myEvent.parseEvents()

// static method
// Event.parseEvents = ...
// Event.parseEvents()

function scrapeHttp(url, cb) {
	request(url, function(error, response, body) {
		if(error || response.statusCode !== 200) {
			cb('Error')
		}
		else {
			cb(null, Event.parseEvents(body))
		}
	})
}

function scrapeFile(path, cb) {
	fs.readFile(path, function(error, body) {
		if(error) {
			cb('Error')
		}
		else {
			cb(null, Event.parseEvents(body))
		}
	})
}

// Start scraping from the command line
function run() {

	if(process.argv.length < 3) {
		console.log('You must specify a url')
		process.exit(1)
	}

	scrapeHttp(process.argv[2], function(error, events) {
		if(error) {
			console.log(error);
		}
		else {
			console.log(events);
		}
	})
}

// handle command line mode or export methods
if(require.main === module) {
	run()
}
else {
	module.exports = {
		Event: Event,
		parseEvents: Event.parseEvents,
		scrapeHttp: scrapeHttp,
		scrapeFile: scrapeFile
	}
}