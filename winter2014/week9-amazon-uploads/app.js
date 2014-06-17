
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var aws = require('aws-sdk');
var fs = require('fs');

var app = express();

/*

  AMAZON URLs

  sign up: http://aws.amazon.com/s3/
  access account: https://console.aws.amazon.com/s3/home
  access credentials: https://console.aws.amazon.com/iam/home?#security_credential

  CREDENTIALS

  In the credentials page, select "Access keys", then
  generate a new access key.

  BUCKET

  In the amazon s3 console, create a bucket
  and enter the name below.

 */

var KEY = '<amazon key>';
var SECRET = '<amazon secret>';
var BUCKET = '<bucket name>';


aws.config.update({
  accessKeyId: KEY,
  secretAccessKey: SECRET
});
var s3 = new aws.S3();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) {
  s3.listObjects({
    Bucket: BUCKET,
  }, function (err, data) {
    res.render('index', {s3: data});
  });
  
});

/*
  Files uploaded here will be
  publicly accessible
 */
app.post('/submitPublic', function (req, res) {
  console.log(req.files);
  var fName = req.files.image.name;
  var fPath = req.files.image.path;
  var cType = req.files.image.type;
  var size = req.files.image.size;

  fs.readFile(fPath, function (err, data) {
    console.log(err);
    s3.putObject({
      Bucket: BUCKET,
      Key: 'public/' + fName,
      ContentType: cType,
      ACL: 'public-read',
      Body: data
    }, function (err, result) {
      console.log(err, result);
      res.redirect('/');
    });
  });
});

/*
  Files uploaded here will only be
  accessible to the owner of the amazon
  account. The 'view' route will act as
  a gate to the content; a proxy.
 */
app.post('/submitPrivate', function (req, res) {
  console.log(req.files);
  var fName = req.files.image.name;
  var fPath = req.files.image.path;
  var cType = req.files.image.type;
  var size = req.files.image.size;

  fs.readFile(fPath, function (err, data) {
    console.log(err);
    s3.putObject({
      Bucket: BUCKET,
      Key: 'private/' + fName,
      ContentType: cType,
      Body: data
    }, function (err, result) {
      console.log(err, result);
      res.redirect('/');
    });
  });
});

/*
  View the privately saved files by accessing
  them through s3 directly.
 */
app.get('/view', function (req, res) {
  s3.getObject({
    Bucket: BUCKET,
    Key: req.query.key
  }, function (err, data) {
    res.writeHead(200, {'Content-Type': data.ContentType });
    // console.log(data);
    res.end(data.Body);
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
