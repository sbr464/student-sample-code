// We need the amazon sdk module
var aws = require('aws-sdk');
var fs = require('fs');

// Because we don't want to post our private info to
// the web, especially if this is on github, we'll need
// to take precautions to make this process seamless.
// 1. Locally, we will use a local file that is also
//    in our gitignore so that it won't get publicly posted.
//    You can take the -sample off the private file and add
//    your own content to it.
// 2. If using Heroku, you'll want to set two keys in the config
//    section, AWS_KEY and AWS_SECRET which we'll use if they are set.

var KEY, SECRET;
if(process.env.AWS_KEY){
  // if the process has AWS_KEY set, we'll use those values
  KEY = process.env.AWS_KEY;
  SECRET = process.env.AWS_SECRET;
} else {
  // if the process doesn't have stuff set, we'll load in our config file
  var privateSettings = require('../private.js');
  KEY = privateSettings.aws.key;
  SECRET = privateSettings.aws.secret;
}

var BUCKET = 'crolfs-test';

aws.config.update({
  accessKeyId: KEY,
  secretAccessKey: SECRET
});
var s3 = new aws.S3();

var indexController = {
  index: function(req, res) {
    s3.listObjects({
      Bucket: BUCKET,
    }, function (err, data) {
      res.render('index', {
        s3: data,
        bucket: BUCKET
      });
    });
  },

  view: function(req, res){
    s3.getObject({
      Bucket: BUCKET,
      Key: req.query.key
    }, function (err, data) {
      res.send(data.Body);
    });
  },

  submitPublic: function(req, res){
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
        // good idea to remove the temporary upload
        fs.unlink(fPath);
        res.redirect('/');
      });
    });
  },

  submitPrivate: function(req, res){
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
        // good idea to remove the temporary upload
        fs.unlink(fPath);
        res.redirect('/');
      });
    });
  }
};

module.exports = indexController;
