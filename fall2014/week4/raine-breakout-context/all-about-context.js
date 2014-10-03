// define the Order class (constructor)
var Order = function() {
	this.total = 0;
	this.items = [];
}

// define an instance method
Order.prototype.save = function(userId) {
	// we're assuming that http.post is defined elsewhere as an ajax function to send data to the server
	http.post(userId, this.total, this.items);
}

...

var id = 1;
var order = new Order();
order.total = 10;

// the most common situation is that 'this' refers to the thing before the dot (the host object)
order.save(2) 		// this: order
order['save'](2) 	// this: order

// lost context :(
var specialSave = order.save;
specialSave(3) // this: null,window

// bind will lock in the context, then forward any additional arguments to the original function
var superSpecialSave = order.save.bind(order, a)
superSpecialSave(b, c)
// order.save(a, b, c)

// 0.
// this correctly attaches the event handler
// but doesn't pass a userId AND the context is lost
$('.save-button').on('click', order.save)

// this correctly sets the context using bind but the userId is still not passed
$('.save-button').on('click', order.save.bind(order))

// we can't pass the userId like this, because it invokes the save function too early (before the click handler is actually attached)
// $('.save-button').on('click', order.save(id))

// Solution #1: Wrap the invocation in an anonymous function
// The context of save is 'order' because we're invoking it with dot notation
// We can call save with the id since we're inside the anonymous function
$('.save-button').on('click', function() {
	order.save(id)
})

// Solution #2: bind
$('.save-button').on('click', order.save.bind(order, id))



// call and apply invoke a function immediately with a given context and arguments
order.save.call(order, id, arg2)
order.save.apply(order, [id, arg2])

// (bind is the same as call, but instead of invoking the function immediately it returns an anonymous function that does the call)


var lee = {};
lee.readPaper = function() {
	console.log(this, ' like to wear dresses.');
}

lee.readPaper() // this: lee

sendToObama(lee.readPaper) // this: null, window

// bind forces this to be lee
sendToObama(lee.readPaper.bind(lee)) // this: lee

