var schools = [
    {
        name: 'University of Michigan',
        city: 'Ann Arbor',
        state: 'Michigan'
    },
    {
        name: 'Michigan State University',
        city: 'East Lansing',
        state: 'Michigan'
    },
    {
        name: 'Eastern Michigan University',
        city: 'Ypsilanti',
        state: 'Michigan'
    },
    {
        name: 'Wayne State University',
        city: 'Detroit',
        state: 'Michigan'
    },
    {
        name: 'The Ohio State University',
        city: 'Columbus',
        state: 'Ohio'
    },
    {
        name: 'Western Michigan University',
        city: 'Kalamazoo',
        state: 'Michigan'
    }
];

var users = [
  {
    username: 'kathy'
  },
  {
    username: 'brian'
  }
];

// var ratings = [
//   {
//
//   },
// ]

var bluebird = require('bluebird');
var mongoose = require('mongoose');

var models = require('./server/models/allModels.js');
var School = models.School;
var User = models.User;
var Rating = models.Rating;

mongoose.connect('mongodb://localhost/fourpointtwo');

var wipeDB = function () {

    var models = [School, Rating,User];

    models.forEach(function (model) {
        model.find({}).remove(function () {});
    });

    return bluebird.resolve();

};

var seed = function () {

    School.create(schools, function (err) {
        if (err) {
            console.error(err);
        }
        console.log('Schools seeded!');
        process.kill(0);
    });

    User.create(users, function (err) {
        if (err) {
            console.error(err);
        }
        console.log('Users seeded!');
        process.kill(0);
    });

    // Rating.create(ratings, function (err) {
    //     if (err) {
    //         console.error(err);
    //     }
    //     console.log('Ratings seeded!');
    //     process.kill(0);
    // });
};

mongoose.connection.once('open', function () {
    wipeDB().then(seed);
});
