// works, but lots of redundancy

if(process.argv[2] === 'major') {
	var parts = process.version.slice(1).split('.');
	console.log(parts[0]);
}
else if(process.argv[2] === 'minor') {
	var parts = process.version.slice(1).split('.');
	console.log(parts[1]);
}
else if(process.argv[2] === 'patch') {
	var parts = process.version.slice(1).split('.');
	console.log(parts[2]);
}
else if(!process.argv[2]) {
	console.log(process.version);
}
else {
	console.error('Invalid version type. Please specify major, minor, patch (or none).');
}
