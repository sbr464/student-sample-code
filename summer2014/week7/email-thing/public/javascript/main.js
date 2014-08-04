$(function () {
  
  // Handle new message form submit
  $('#new-message').on('submit', function(e) {
    // Prevent form from submitting
    // so we can handle that with ajax
    e.preventDefault();

    // Pull out the field values from the form
    var user = $('#target-user').val();
    var subj = $('#target-subject').val();
    var mess = $('#target-message').val();

    // POST to the server with our form data
    $.post(
      '/newMessage',
      {
        name: user,
        subject: subj,
        message: mess
      },
      function(data) {

        // For now we are just console.logging
        // the data sent back from the server
        // when a new message is created by this
        // client machine.
        console.log(data);
      }
    );
  });

  // Handle getting all messages for a user
  $('#get-messages').on('submit', function(e) {
    // Prevent from from submitting
    // so we can handle it with ajax
    e.preventDefault();

    // Pull the user value from the form
    var user = $('#request-user').val();

    // GET from the server any messages
    // that match the given username
    $.get(
      '/getMessages',
      {
        user: user
      },
      function(data) {
        // Clear the list of any
        // residual messages from other
        // users
        $('#message-list').empty();

        // Render the incoming
        // list of messages as LI's
        // containing content from the
        // message object itself.
        for (var i = 0; i < data.length; i++) {

          // Render an item:
          //  <li>
          //    <h4>Message Subject</h4>
          //    <p>Message contents</p>
          //  </li>
          $('#message-list').append(
            '<li>' +
              '<h4>' + data[i].subject + '</h4>' +
              '<p>' + data[i].message + '</p>' +
            '</li>'
          )
        };
      }
    );
  });

});