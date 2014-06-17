// first refactoring step is to move parts above the conditionals since it is reused multiple times

var parts = process.version.slice(1).split('.');

if(process.argv[2] === 'major') {
	console.log(parts[0]);
}
else if(process.argv[2] === 'minor') {
	console.log(parts[1]);
}
else if(process.argv[2] === 'patch') {
	console.log(parts[2]);
}
else if(!process.argv[2]) {
	console.log(process.version);
}
else {
	console.error('Invalid version type. Please specify major, minor, patch (or none).');
}
