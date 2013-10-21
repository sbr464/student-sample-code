var socket = io.connect('http://localhost');

var $count = $('#count');
var $tweetsPerSec = $('#tweets-per-second')
var count = 0
var lastAmount = 0;

socket.on('data', function (data) {
	console.log(data.tweet);
	$count.text(data.count)
	count = data.count
});

setInterval(function(){
	$tweetsPerSec.text(count - lastAmount);
	lastAmount = count
}, 1000)