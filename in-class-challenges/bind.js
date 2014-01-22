
// basic bind
var myBind = function(ctx, f) {
	return function() {
		f.call(ctx);
	};
}

// with support for arguments and return value
var myBind = function(ctx, f) {
	return function(/*x, y, z*/) {
		return f.apply(ctx, arguments);
	};
}