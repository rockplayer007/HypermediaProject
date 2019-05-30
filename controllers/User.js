'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');


module.exports.userBookPUT = function userBookPUT (req, res, next) {
    var userEmail = req.swagger.params['userEmail'].value;
    var books = req.swagger.params['books'].value;

    User.userBookPUT(userEmail,books)
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
  /*
  if(!req.session.loggedin) {
      req.session.loggedin = true;
  }
  else {
        req.session.loggedin = !req.session.loggedin;
  }

   */

  User.userLoginPOST(email,password)
      .then(function (response) {

          if(response){
              req.session.userid = email;
              utils.writeJson(res, {"loggedIn": true}, 200);
          }
          else {
              utils.writeJson(res, {"loggedIn": false}, 403);
          }
          //utils.writeJson(res, { error: "sorry, you must be authorized" }, 404);


      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};


module.exports.userLogoutGET = function userLogoutGET (req, res, next) {
    //needed to logout the user
    req.session.userid = false;
    User.userLogoutGET()
      .then(function (response) {

          utils.writeJson(res, {"loggedOut": true});
      })
      .catch(function (response) {
        utils.writeJson(res, {"loggedOut": false});
      });
};

module.exports.userRegisterPOST = function userRegisterPOST (req, res, next) {
    var email = req.swagger.params['email'].value;
    var password = req.swagger.params['password'].value;
    User.userRegisterPOST(email,password)
        .then(function (response) {

            if(response){
                req.session.userid = email;
                utils.writeJson(res, {"added": true}, 200);
            }
            else {
                utils.writeJson(res, {"added": false}, 404);
            }



            //utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.usersIdCartGET = function usersIdCartGET (req, res, next) {
  var id = req.swagger.params['id'].value;

  if(req.session.userid === id){
      utils.writeJson(res, {"loggedIn" : true}, 200);
      /*
      User.usersIdCartGET(id)
          .then(function (response) {
              utils.writeJson(res, response);
          })
          .catch(function (response) {
              utils.writeJson(res, response);
          });

       */
  }
  else{
      utils.writeJson(res, {"loggedIn" : false}, 403);
  }

};




