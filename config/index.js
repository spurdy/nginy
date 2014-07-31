'use strict';
var schema = require('./schema');

module.exports = {
    env : schema.get('env'),
    pid : schema.get('pid'),
    port : schema.get('port'),
    directory: schema.get('directory')
  };