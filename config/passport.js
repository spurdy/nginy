'use strict';
var passport          = require('passport'),
      config              = require('./'),
      LdapStrategy   = require('passport-ldapauth').Strategy;

passport.serializeUser(function(user,done){
  console.log(user);
  done(null, user.dn);
});

passport.deserializeUser(function(dn, done){
  done(null, {dn : dn});
});

passport.use(new LdapStrategy({
  server: {
    url: config.ldap,
    adminDn: config.ldapAdmin,
    adminPassword: config.ldapPassword,
    searchBase: config.ldapBase,
    searchFilter: '(uid={{username}})',
    tlsOptions: {'rejectUnauthorized':false}
  }
},
  function(user, done){
    console.log(user); // what do we have?
    // if we have a user we have successfully authenticated it
    return done(null, user);
  }));

module.exports = passport;