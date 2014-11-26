'use strict';
var config  = require('./config');

var app = require('./index');
app.listen(config.port);
console.log('NginY started on port',config.port);