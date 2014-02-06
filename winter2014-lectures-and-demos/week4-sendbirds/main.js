$(function() {

	/** Our Special Email Queue class */
	var VisualEmailQueue = function() {
		EmailQueue.call(this);
	};
	VisualEmailQueue.prototype = new EmailQueue();
	VisualEmailQueue.prototype.process = function() {
		var email = EmailQueue.prototype.process.call(this);

		// get sender id, element, and coordinates
		var senderId = email.sender.id;
		var senderEl = $('.user[data-id="{0}"]'.supplant([senderId]));
		var senderTop = senderEl.css('top');
		var senderLeft = senderEl.css('left');

		// get receiver id, element, and coordinates
		var receiverId = email.receiver.id;
		var receiverEl = $('.user[data-id="{0}"]'.supplant([receiverId]));
		var receiverTop = receiverEl.css('top');
		var receiverLeft = receiverEl.css('left');

		// render email icon
		var emailImage = $('<img class="icon-small" src="images/email.png">')
		emailImage.css({
			position: 'absolute',
			top: senderTop,
			left: senderLeft
		});
		$('.display').append(emailImage);

		var serverTop = $('#server').css('top');
		var serverLeft = $('#server').css('left');

		emailImage
			.fadeIn()
			.animate({
				left: serverLeft,
				top: serverTop
			}, 2000)
			.animate({
				left: receiverLeft,
				top: receiverTop
			}, 2000)
			.fadeOut();
	};

	/** Convert an array of objects with 'name' and 'value' keys into an object. */
	var nameValueObject = function(arr) {
		var obj = {};
		for(var i=0; i<arr.length; i++) {
			var item = arr[i];
			obj[item.name] = item.value;

			// obj.happy = true;
			// obj['happy'] = true;
		}
		return obj;
	}

	var users = [
		new Person(1, "Pissed Off", "Bird", "pissedoff@refactoru.com"),
		new Person(2, "Cantankerous", "Bird", "cantankerous@refactoru.com"),
		new Person(3, "Insomnia", "Bird", "insomnia@refactoru.com")
	];

	var masterQueue = new VisualEmailQueue();

	$('#composeForm').on('submit', function(e) {
		e.preventDefault();

		// retrieve data from form
		var emailData = $(this).serializeArray();
		var emailObject = nameValueObject(emailData);

		// find the sender and receiver
		var sender = users.filter(function(person) {
			return person.id === +emailObject.sender;
		})[0];
		var receiver = users.filter(function(person) {
			return person.id === +emailObject.receiver;
		})[0];

		// instantiate a new email object
		var newEmail = new Email(sender, receiver, emailObject.subject, emailObject.body);

		// add the email to the wueue
		masterQueue.addEmails([ newEmail ]);

		// reset form
		$('#composeForm')[0].reset();

	});

	$('#process').on('click', function() {
		masterQueue.process();
	})

});
