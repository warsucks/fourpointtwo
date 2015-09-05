var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schoolSchema = new mongoose.Schema({
    name: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true}
});

module.exports = mongoose.model('School', schoolSchema);
