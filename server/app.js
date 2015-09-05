var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var models = require('./models/allModels.js');
var School = models.School;
var User = models.User;
var Rating = models.Rating;
var morgan = require('morgan');

var app = express(); // Create an express app!
module.exports = app; // Export it so it can be require('')'d

// The path of our public directory. ([ROOT]/public)
var publicPath = path.join(__dirname, '../public');
var bowerPath = path.join(__dirname, '../bower_components');

// The path of our index.html file. ([ROOT]/index.html)
var indexHtmlPath = path.join(__dirname, '../views/index.html');

// http://nodejs.org/docs/latest/api/globals.html#globals_dirname
// for more information about __dirname

// http://nodejs.org/api/path.html#path_path_join_path1_path2
// for more information about path.join

// When our server gets a request and the url matches
// something in our public folder, serve up that file
// e.g. angular.js, style.css
app.use(express.static(publicPath));
app.use(express.static(bowerPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

// If we're hitting our home page, serve up our index.html file!
app.get('/', function (req, res, next)
{
  res.sendFile(indexHtmlPath);
});

app.get('/school/:schoolId', function(req, res, next)
{
  var schoolId = req.params.schoolId;
  console.log("schoolId", schoolId)
  School.findOne({_id: schoolId})
  .then(function(school)
  {
    console.log("found school", school)
    res.send(school);
  })
  .then(null, next);
});

app.post('/rating', function(req, res, next)
{
  var userId = req.body.userId;
  var schoolId = req.body.schoolId;
  //var ratingId = req.body.ratingId; assume that the rating does not yet exist
  var ratings = req.body.ratings;
  //add the rating to the database
  Rating.create(
  {
    author: userId,
    school: schoolId,
    faculty: ratings.faculty,
    diversity: ratings.diversity,
    socialScene: ratings.socialScene,
    studentBody: ratings.studentBody,
    localComm: ratings.localComm,
    adminSupport: ratings.adminSupport,
    finAid: ratings.finAid
  })
  .then(function(createdRating)
  {
    res.send(createdRating);
  })
  .then(null, next);
});

app.use('/',function (req, res, next)
{
	console.log('made it to the last middleware');
	next();
});
