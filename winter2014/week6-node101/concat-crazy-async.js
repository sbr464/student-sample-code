// concatenate two files, and output the combined file
// e.g. node concat.js

var fs = require('fs');

var outputFile = process.argv[2];
var inputFile1 = process.argv[3];
var inputFile2 = process.argv[4];

var main1 = function() {
	fs.readFile(inputFile1, function(err, file1Data) {
		console.log('A (file1)');
		console.log(file1Data.toString());
	});

	fs.readFile(inputFile2, function(err, file2Data) {
		console.log('B (file2)');
		console.log(file2Data.toString());
	});

	setTimeout(function() {
		console.log('D (setTimeout)');
	}, 0);


	for(var i=0; i<10000; i++) {
		console.log(i);
	}
	console.log('C (next line)');
};

var main2 = function() {
	console.log('main2');
}

main1();
main2();
