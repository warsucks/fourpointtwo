var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fourpointtwo');

// Grabbing our server from our server/index.js file.
var server = require('./server/index.js');

var PORT = 1337;

mongoose.connection.once('open', function () {
    server.listen(PORT, function () {
	    console.log('Server started on port ' + PORT.toString());
	});
});
