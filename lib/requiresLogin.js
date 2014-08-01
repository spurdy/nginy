'use strict';
module.exports = function requiresLogin(req,res,next){
  console.log('hitting requires login')
  if(req.isAuthenticated())
    return next();

  console.log('redirecting to /login.html');
  return res.redirect('/login.html');
};