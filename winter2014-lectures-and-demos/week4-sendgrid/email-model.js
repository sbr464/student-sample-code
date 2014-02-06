// class, constructor, type
var Email = function(sender, receiver, subject, body) {
	this.sender = sender;
	this.receiver = receiver;
	this.subject = subject;
	this.body = body;
};
											/* initializer list */
var Person = function(id, firstName, lastName, email) {
	// instance variables
	// instance members
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
};

var EmailQueue = function() {
	this.queue = [];
	// works but less efficient:
	// this.myMethod = ...
}
/** Adds emails to the queue. 
	@param emails 	An Array of Email objects.
*/
EmailQueue.prototype.addEmails = function(emails) {
	if(!(emails instanceof Array)) {
		console.error('addEmails expects an Array')
	}
	for(var i=0; i<emails.length; i++) {
		this.queue.push(emails[i]);
	}
};
EmailQueue.prototype.process = function() {
	var email = this.queue.splice(0, 1)[0];
	var supplantValues = [email.subject, email.receiver.firstName, email.receiver.lastName];
	console.log('Email "{0}" has been sent to {1} {2}.'.supplant(supplantValues));

	return email;
};

