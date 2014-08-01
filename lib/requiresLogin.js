'use strict';
module.exports = function requiresLogin(req,res,next){
  if(req.isAuthenticated())
    return next();
  return res.redirect('/login.html');
};