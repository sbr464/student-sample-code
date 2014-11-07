var socketio = io.connect();

var runAthing = function(){
  console.log('A thing...');
};

socketio.on('serverSays', function(message){
  console.log('Server said:', message);
  runAthing();
});

socketio.on('functionRunner', function(functionName){
  window[functionName]();
});