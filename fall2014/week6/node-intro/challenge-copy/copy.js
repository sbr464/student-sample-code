/*
	Copy:

	Write an application that copies a text file.

	e.g. node copy.js source.txt destination.txt

 */

// Utilize the fs core module
var fs = require('fs');

// Grab the source and destination file names
// from the command line arguments.
var sourceFileName = process.argv[2];
var destinationFileName = process.argv[3];

// Load in the source file's contents as utf-8
var sourceFileContents = fs.readFileSync(sourceFileName, 'utf-8');

// Write the loaded source contents into the destination file
fs.writeFileSync(destinationFileName, sourceFileContents);