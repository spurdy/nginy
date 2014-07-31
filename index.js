'use strict';
var express = require('express'),
    config  = require('./config');

var app = express();

app.use(express.static(config.directory));

module.exports = app;