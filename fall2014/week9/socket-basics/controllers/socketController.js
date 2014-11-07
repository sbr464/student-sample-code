module.exports = function(socketio, socket){

  var socketController = {
    message: function(message){
      console.log('Received:', message);
      socketio.emit('functionRunner', 'runAthing');
    },

    saySomething: function(message){
      console.log('Someone said:', message);
      socketio.emit('serverSays', 'We got a message ' + message);
    }
  };

  return socketController;
};