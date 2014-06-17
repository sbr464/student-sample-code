var express = require('express');
var bodyParser = require('body-parser');
var NewsItem = require('./newsClass');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// Create some news items and store each into the array
var articles = [
  new NewsItem({
    title: 'Hurricane',
    description: 'It\'s gonna getcha! It\'s gonna be awesome! Hurricane party at Dave\'s!',
    date: new Date('4/4/2013'),
    author: 'Dave'
  }),
  new NewsItem({
    title: 'Bigfoot Spotted',
    description: 'Feet are actually quite small...',
    date: new Date('8/3/2014'),
    author: 'Dan'
  }),
  new NewsItem({
    title: 'Godzilla Destroys Tokyo',
    description: 'Again....',
    date: new Date('2/2/2002'),
    author: 'Matt'
  }),
  new NewsItem({
    title: 'Sharknado',
    description: 'It\'s going to be the most amazing thing ever',
    date: new Date('1/1/2001'),
    author: 'Chris'
  })
];

var clearArchives = function(archiveCutoffDate){
  // Find all articles that occur before the given cutoff date
  // and remove them from the array
  var output = [];
  for (var i = 0; i < articles.length; i++) {
    if(articles[i].date.getTime() >= archiveCutoffDate.getTime()){
      // The article has a date that occurs before the cutoff...
      output.push(articles[i]);
    }
  };

  // Send back the newly built array that contains only
  // the un-archived articles
  return output;
};

// Sort dates DESCENDING and return the sorted items
// Non-destructively
var sortArticles = function(){
  // clone the array so that sort is non-destructive
  var temp = articles.concat();
  return temp.sort(function(a, b){
    return b.date.getTime() - a.date.getTime();
  });
};

app.get('/', function(req, res) {
  // Render the homepage and pass it access to the
  //  articles array. Jade will read this as the "newsItems"
  //  variable.
  
  // First, let's clear out the archives
  var today = new Date();

  // Let's go back X number of years:
  //  2 years * 365 days * 24 hours * 60 mins * 60 secs * 1000 milliseconds
  var yearsInMilliseconds = 20 * 365 * 24 * 60 * 60 * 1000;
  // Take todays milliseconds and subtract 2 years worth of milliseconds
  var archiveDate = new Date(today.getTime() - yearsInMilliseconds);
  // Clear the archives that occur before the given date
  // Re-assign to articles because the clearArchives function is
  // non-destructive
  articles = clearArchives(archiveDate);

	res.render('index', {
    newsItems: articles
  });
});

app.get('/recent', function(req, res){
  res.render('index', {
    newsItems: sortArticles().slice(0, 3)
  });
}); 

// Create a route for handling links like:
//  '/view/Hurricane' or '/view/Bigfoot'
app.get('/view/:url', function(req, res){

  // I want to find the news article who's
  // url matches req.param('url')
  for(var i = 0; i < articles.length; i++){
    if(articles[i].url === req.param('url')){
      // this article's url matches the one in the url
      // Render the 'article.jade' view and give it access
      // to the 'article' variable that will be set to the
      // value of the current article in the loop
      res.render('article',{
        article: articles[i]
      });

      // Halt function execution here
      return;
    }
  }

  // If code gets to this point, no matching article
  // was found.
  res.send( 'Article ' + req.param('url') + ' not found!' );
});

// Handle new news article submissions
app.post('/newArticle', function(req, res){
  // Create a new news item using the values sent
  // with the form in req.body
  
  // First we need to adjust the given date to be
  // an actual Date object
  var newsData = req.body;
  newsData.date = new Date(newsData.date);

  var newNewsItem = new NewsItem(newsData);

  // Add the item to the array
  articles.push(newNewsItem);

  // Redirect back to the listing (home) page
  res.redirect('/');
});

// Handle all delete requests
app.get('/delete/:url', function(req, res){

  // Loop through articles to find the matching one
  for(var i = 0; i < articles.length; i++){
    if(articles[i].url === req.param('url')){

      // Splice out the current index (the one that matches)
      articles.splice(i, 1);

      // Redirect to the homepage
      res.redirect('/');

      // Prevent loop from continuing
      return;
    }
  }

  // If it gets here, no article matched, so just return home
  res.redirect('/');
});

var server = app.listen(5500, function() {
	console.log('Express server listening on port ' + server.address().port);
});
