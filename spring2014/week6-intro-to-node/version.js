var parts = process.version.slice(1).split('.');
var output;
var partMap = {
	major: 0,
	minor: 1,
	patch: 2
};

if(!process.argv[2]) {
	output = process.version;
}
else if(process.argv[2] in partMap) {
	var index = partMap[process.argv[2]];
	output = parts[index];
}

// var output = !process.argv[2] ? 		process.version :
// 	process.argv[2] in partMap ? 	parts[partMap[process.argv[2]]] :
// 	'';

if(output) {
	console.log(output);
}
else {
	console.error('Invalid version type. Please specify major, minor, patch (or none).');
}
