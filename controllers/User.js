'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userGET = function userGET (req, res, next) {
  User.userGET()
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};

module.exports.userLoginPOST = function userLoginPOST (req, res, next) {
  var email = req.swagger.params['email'].value;
  var password = req.swagger.params['password'].value;
  if(!req.session.loggedin) {
      req.session.loggedin = true;
  }
  else {
        req.session.loggedin = !req.session.loggedin;
  }

  User.userLoginPOST(email,password)
      .then(function (response) {
          /*
          if(response.length == 1){
              utils.writeJson(res, response, 200);
          }
          else {
              utils.writeJson(res, response, 404);
          }

           */
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};


module.exports.userLogoutGET = function userLogoutGET (req, res, next) {
    //needed to logout the user
    req.session.loggedin = false;
    User.userLogoutGET()
      .then(function (response) {

          utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};

module.exports.userRegisterPOST = function userRegisterPOST (req, res, next) {
    var email = req.swagger.params['email'].value;
    var password = req.swagger.params['password'].value;
    User.userRegisterPOST(email,password)
        .then(function (response) {
            /*
            if(response){
                utils.writeJson(res, response, 200);
            }
            else {
                utils.writeJson(res, response, 404);
            }

             */
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.usersIdCartGET = function usersIdCartGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  User.usersIdCartGET(id)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};

module.exports.usersIdGET = function usersIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  User.usersIdGET(id)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};


