// concatenate two files, and output the combined file
// e.g. node concat.js

var fs = require('fs');

var outputFile = process.argv[2];
var inputFile1 = process.argv[3];
var inputFile2 = process.argv[4];

fs.readFile(inputFile1, function(err, file1Data) {

	fs.readFile(inputFile2, function(err, file2Data) {

		var concatenated = file1Data + '\n' + file2Data;
		fs.writeFile(outputFile, concatenated, function(err) {

			if(err) {
				console.log(err);
			}
			else {
				console.log('Success!');
			}

		});
	});

});

// executed in parallel
