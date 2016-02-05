'use strict';
var express   = require('express'),
      config     = require('./config'),
      cookieParser = require('cookie-parser'),
      logger = require('morgan'),
      session = require('client-sessions'),
      bodyParser = require('body-parser'),
      requiresLogin = require('./lib/requiresLogin'),
      passport = require('./config/passport');

var app = express();

if(config.env === 'development')
  app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser(config.secret));

app.use(session({
  secret: config.secret,
  cookieName: 'session',
  duration: 30*60*1000, //  thirty minutes
  cookie: {
    ephemeral: true
    //secureProxy:true // maybe for production?
  }
}));

app.use(passport.initialize());
app.use(passport.session());


app.post('/signin', passport.authenticate('ldapauth', {
  successRedirect: '/',
  failureRedirect:'/login.html'
}));

app.use(express.static(__dirname+'/public'));
if(config.requiresLogin){
  app.use(requiresLogin);
}

if(config.directory){
  app.use(express.static(config.directory));
}

module.exports = app;