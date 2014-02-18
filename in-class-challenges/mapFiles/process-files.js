var fs = require('fs');

var mapFiles = function(files, iterator, complete) {

	var processOne = function(file, complete) {
		fs.readFile(file, function(err, data) {
			var result = iterator(data);
			complete(err, result);
		});
	};

	processOne(files[0], function(err, result) {
		if(files.length === 1) {
			complete(null, [result]);
		}
		else {
			mapFiles(files.slice(1), iterator, function(err, nextResult) {
				complete(null, [].concat(result, nextResult));
			});
		}
	});

};

var fileSize = function(data) {
	return data.length;
};

mapFiles(process.argv.slice(2), fileSize, function(err, results) {
	console.log(results);
});