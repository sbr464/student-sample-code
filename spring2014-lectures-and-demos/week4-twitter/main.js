/**
 * Feed Class - contains a set of tweets
 * @param {jQuery Object} $target Where to render
 */
var Feed = function($target){
  this.tweets = [];
  this.$target = $target;
};

/**
 * Add a new tweet to the list and re-render it
 * @param {Tweet} tweet Tweet to add
 */
Feed.prototype.addTweet = function(tweet) {
  this.tweets.unshift(tweet);
  this.sortTweets();
  this.render();
  this.save();
};

/**
 * Remove tweet from feed and save
 * @param  {int} index Index to remove
 */
Feed.prototype.removeTweet = function(index) {
  this.tweets.splice(index, 1);
  this.sortTweets();
  this.render();
  this.save();
};

/**
 * Render the feed to the DOM
 */
Feed.prototype.render = function() {
  this.$target.empty();
  for (var i = 0; i < this.tweets.length; i++) {
    var tweetTemplate = this.tweets[i].render();
    tweetTemplate.attr('data-id', i);
    this.$target.append(tweetTemplate);
   }; 
};

/**
 * Save the entire feed as a string in LocalStorage
 */
Feed.prototype.save = function() {
  var saveStr = JSON.stringify(this.tweets);
  localStorage.setItem('feed', saveStr);
};

/**
 * Load in the string from LocalStorage and
 * convert it into Tweet instances
 */
Feed.prototype.load = function() {
  var loadStr = localStorage.getItem('feed');
  var loaded = JSON.parse(loadStr);
  var loadedTweets = [];

  // loop through all the loaded tweets and
  // convert them into instances of Tweet
  for(var i = 0; i < loaded.length; i++){
    // convert date string to date object:
    //  new Date(loaded[i].datetime)
    this.addTweet(
      new Tweet(
        loaded[i].username,
        loaded[i].message,
        new Date(loaded[i].datetime)
      )
    );
  }
};

/**
 * Sort the tweet list by date
 */
Feed.prototype.sortTweets = function() {
  // sort by date
  this.tweets = this.tweets.sort(function(a,b){
    return b.datetime.getTime() - a.datetime.getTime();
  });
};

/**
 * Show the feed as a string
 * @return {string} The feed as a string
 */
Feed.prototype.toString = function() {
  return this.tweets.toString();
};

/**
 * Tweet Class - Singular description of
 *   Tweet objects.
 * @param {string} username User's name
 * @param {string} message  The message of the tweet
 * @param {Date - optional} datetime Optionally force a date, otherwise use current date
 */
var Tweet = function(username, message, datetime){
  this.username = username;
  this.message = message;
  if(datetime === undefined)
    this.datetime = new Date();
  else
    this.datetime = datetime;
};

/**
 * Generate the jQuery element for appending to
 * the page.
 * @return {jQuery Object} The cloned template element
 */
Tweet.prototype.render = function() {
  // Clone the original (hidden) on-html template
  var template = $('.tweet-template.original').clone();
  template.find('.title').text(this.username);
  template.find('.message').text(this.message);
  template.find('.date').text(this.datetime);
  template.removeClass('original');
  return template;
};

/**
 * Show the tweet as a string
 * @return {string} String version of the tweet
 */
Tweet.prototype.toString = function() {
  var oparr = [];
  for(var prop in this){
    // Ignore the toString method in the output
    if(prop !== 'toString'){
      /*
      // This will allow us to call the property and use
      // its return value in the output
      if(typeof this[prop] === 'function')
        oparr.push( prop + ': ' + this[prop]('set this message') );
      else
        oparr.push( prop + ': ' + this[prop] );
      */
      oparr.push( prop + ': ' + this[prop] );
    }
  }
  return oparr.join(', ');
};

// Some initial test/prefill values:
// var tweet1 = new Tweet('chris', 'It\'s coding time!');
// var tweet2 = new Tweet('brian', 'Cereal for breakfast!');
// console.log('Tweet1: ' + tweet1);

// Define the core feed object
var feed = new Feed($('#feed'));
// feed.addTweet(tweet1);
// feed.addTweet(tweet2);

// Load in tweets from localStorage
feed.load();
// console.log('Feed: ' + feed);


// jQuery onReady...
$(document).on('ready', function() {

  // On new tweet submit...
  $('#new-tweet').on('submit', function(){
    var usernameField = $(this).find('[name=username]');
    var tweetField = $(this).find('[name=tweet]');

    var username = usernameField.val();
    var tweet = tweetField.val();

    // Validate that neither field is empty
    // and add an error class if they are
    var isValid = true;
    usernameField.removeClass('error');
    if(username === ''){
      usernameField.addClass('error');
      isValid = false;
    }

    tweetField.removeClass('error');
    if(tweet === ''){
      tweetField.addClass('error');
      isValid = false;
    }

    // Prevent submission if not valid
    if(!isValid){
      return false;
    }
    
    // clear the tweet field
    $(this).find('[name=tweet]').val('');

    // Create a new tweet from the field values
    var newTweet = new Tweet(username, tweet);
    feed.addTweet(newTweet);

    // Hide the form and show the button
    $(this).slideUp();
    $('.form-view').fadeIn();

    // Prevent default
    return false;
  });
  
  // Delegate a "remove" event...
  $(document).on('click', '.remove', function(){
    // Find the index of the tweet via the data-id attribute
    var index = $(this)
      .closest('.tweet-template')
      .attr('data-id');

    // Remove the tweet
    feed.removeTweet(index);

    // Prevent Default
    return false;
  });


  // Button for showing the new tweet form
  $('.form-view').on('click', function(){
    $('#new-tweet').slideDown();
    $(this).fadeOut();
  });
});