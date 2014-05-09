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
    date: '1/2/2003',
    author: 'Dave'
  }),
  new NewsItem({
    title: 'Bigfoot Spotted',
    description: 'Feet are actually quite small...',
    date: '5/20/2004',
    author: 'Dan'
  }),
  new NewsItem({
    title: 'Godzilla Destroys Tokyo',
    description: 'Again....',
    date: '8/2/2005',
    author: 'Matt'
  }),
  new NewsItem({
    title: 'Sharknado',
    description: 'It\'s going to be the most amazing thing ever',
    date: '3/2/2040',
    author: 'Chris'
  })
];

app.get('/', function(req, res) {
  // Render the homepage and pass it access to the
  //  articles array. Jade will read this as the "newsItems"
  //  variable.
	res.render('index', {
    newsItems: articles
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

var server = app.listen(5500, function() {
	console.log('Express server listening on port ' + server.address().port);
});
