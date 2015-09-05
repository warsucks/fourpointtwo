var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ratingSchema = new mongoose.Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  school: { type: Schema.Types.ObjectId, ref: 'School' },
  faculty: Number,
  diversity: Number,
  socialScene: Number,
  studentBody: Number,
  localComm: Number,
  adminSupport: Number,
  finAid: Number
});

module.exports = mongoose.model('Rating', ratingSchema);
