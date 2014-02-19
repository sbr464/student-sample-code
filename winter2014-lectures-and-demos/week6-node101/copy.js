var fs = require('fs');

var source = process.argv[2];
var destination = process.argv[3];

fs.readFile(source, function(err, data) {
	fs.writeFile(destination, data, function(err) {
		console.log('Done!');
	});
});