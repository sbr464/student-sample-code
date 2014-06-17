// next refactoring step to eliminate the console.log redundancy is to save the parts into an output variable and just console.log once at the end

var parts = process.version.slice(1).split('.');
var output;

if(process.argv[2] === 'major') {
	output = parts[0];
}
else if(process.argv[2] === 'minor') {
	output = parts[1];
}
else if(process.argv[2] === 'patch') {
	output = parts[2];
}
else if(!process.argv[2]) {
	output = process.version;
}

if(output) {
	console.log(output);
}
else {
	console.error('Invalid version type. Please specify major, minor, patch (or none).');
}
