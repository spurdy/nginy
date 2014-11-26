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
  },
  secret: {
    doc: 'Random string to use for cookie encryption',
    format: String,
    default: '7nC4egZ5eXvG5MNA1xUX3PQSwJCgmZVW',
    env:'COOKIE_SECRET',
    arg:'secret'
  },
  ldap: {
    doc: 'Url to the LDAP server',
    format: 'url',
    default:'',
    env:'LDAP_URL',
    arg: 'ldap-server'
  },
  ldapAdmin: {
    doc:'DN of a user qualified to do LDAP queries',
    format:String,
    default: '',
    env:'LDAP_ADMIN',
    arg:'ldap-admin'
  },
  ldapPassword:{
    doc:'Password for the ldap admin',
    format:String,
    default: '',
    env:'LDAP_PASSWORD',
    arg:'ldap-password'
  },
  ldapBase:{
    doc:'LDAP search base (e.g. ou=Users,dc=example,dc=org',
    format:String,
    default: '',
    env:'LDAP_BASE',
    arg:'ldap-base'
  }
});

module.exports = conf;
