/*

	Bonus: Concat
		Write an application that concatenates
		any number of files together without
		using the built-in appendFile method.

		e.g. node concat.js output.txt input1.txt input2.txt input3.txt
					- Should create a new file called "output.txt" which
					contains the contents of each given input file concatenated
					together, either via a " " or "\n"

 */

// Filesystem core module
var fs = require('fs');

// Pull in the output file name
var outputFileName = process.argv[2];

// Get the list of file names for inputs as
// the rest of the given command line arguments
var inputFileNames = process.argv.slice(3);

// Use functional programming to take the array
// of names from the command line arguments and,
// for each name via map, transform that array
// into a new array where each item in the array
// is now the contents of the associated file.
var combined = inputFileNames
	.map(function(fileName){
		// Transform the fileName into the contents of the file
		return fs.readFileSync(fileName, 'utf-8');
	})
	// Put the whole array of file contents
	// back together as a single string
	// separated by newline characters.
	.join('\n');

// Log the combined contents to the console
console.log(combined);

// now write it back out to the output file
fs.writeFileSync(outputFileName, combined);