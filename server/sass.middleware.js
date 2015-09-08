'use strict';

var sassMiddleware = require('node-sass-middleware');
var router = require('express').Router();
var path = require('path');

router.use('/browser', sassMiddleware({
	src: path.join(__dirname, '..', 'public/browser'),
	debug: true
}));

module.exports = router;
