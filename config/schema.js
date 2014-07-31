'use strict';

var convict = require('convict'),
    path    = require('path');

// define a schema
var conf = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'env'
  },
  pid: {
    doc: 'The location of the pidFile acting as handle to the running cluster.',
    format: String,
    default: path.join(process.cwd(),'pids','cluster.pid'),
    env: 'PIDFILE_PATH',
    arg: 'pidfile'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT',
    arg: 'port'
  },
  directory: {
    doc: 'The directory of static files to serve',
    format: String,
    default: process.cwd(),
    env: 'DIRECTORY',
    arg: 'dir'
  }
});

module.exports = conf;