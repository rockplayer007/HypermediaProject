'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');
var bcrypt = require('bcrypt');


module.exports.userBookPUT = function userBookPUT (req, res, next) {
    var books = req.swagger.params['books'].value;

    if(req.session.userid === undefined){
        req.session.userid = false;
    }

    if(req.session.userid === false){
        utils.writeJson(res, {"loggedIn": false});
    }
    else{
        User.userBookPUT(req.session.userid, books)
        //User.userBookPUT("aleale@ale.it", books)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (response) {
                utils.writeJson(res, response);
            });
    }


};


module.exports.userLoginPOST = function userLoginPOST (req, res, next) {
  var email = req.swagger.params['email'].value;
  var password = req.swagger.params['password'].value;
  let hash = bcrypt.hashSync( password, 10 );

  User.userLoginPOST(email, hash)
      .then(function (response) {
          
          if(response[0] === undefined){
              utils.writeJson(res, {"loggedIn": false});
          }
          else if (bcrypt.compareSync(password, response[0].password)) {
              req.session.userid = email;
              utils.writeJson(res, {"loggedIn": true});
          } else {
              utils.writeJson(res, {"loggedIn": false});
          }

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
        utils.writeJson(res, {"loggedOut": true});
      });
};

module.exports.userIsLoggedGET = function userIsLoggedGET (req, res, next) {
    User.userIsLoggedGET()
        .then(function (response) {
            
            if(req.session.userid === undefined){
                req.session.userid = false;
            }
            if(req.session.userid === false){
                utils.writeJson(res, {"loggedIn" : false});
            }
            else{
                utils.writeJson(res, {"loggedIn" : req.session.userid});
            }

        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};


module.exports.userRegisterPOST = function userRegisterPOST (req, res, next) {
    var email = req.swagger.params['email'].value;
    var password = req.swagger.params['password'].value;
    let hash = bcrypt.hashSync( password, 10 );

    User.userRegisterPOST(email, hash)
        .then(function (response) {

            if (response) {
                req.session.userid = email;
                utils.writeJson(res, {"added": true});
            } else {
                utils.writeJson(res, {"added": false});
            }

        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.usersIdCartGET = function usersIdCartGET (req, res, next) {

    if(req.session.userid === undefined){
        req.session.userid = false;
    }
    if(req.session.userid === false){
        utils.writeJson(res, {"loggedIn" : false});
    }
    else{
        User.usersIdCartGET(req.session.userid)
        //User.usersIdCartGET('aleale@ale.it')
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (response) {
                utils.writeJson(res, response);
            });
    }



};


module.exports.usersIdCartDELETE = function usersIdCartDELETE (req, res, next) {

    if(req.session.userid === undefined){
        req.session.userid = false;
    }
    if(req.session.userid === false){
        utils.writeJson(res, {"loggedIn" : false});
    }
    else{
        User.usersIdCartDELETE(req.session.userid)
        //User.usersIdCartDELETE("aleale@ale.it")
            .then(function (response) {
                utils.writeJson(res, {"deleted": true});
            })
            .catch(function (response) {
                utils.writeJson(res, response);
            });
    }


};


module.exports.usersIdCartBookDELETE = function usersIdCartBookDELETE (req, res, next) {
    var id = req.swagger.params['id'].value;

    if(req.session.userid === undefined){
        req.session.userid = false;
    }
    if(req.session.userid === false){
        utils.writeJson(res, {"loggedIn" : false});
    }
    else{
        User.usersIdCartBookDELETE(req.session.userid, id)
        //User.usersIdCartBookDELETE("aleale@ale.it", id)
        .then(function (response) {
            if(response[0] === undefined){
                utils.writeJson(res, {"deleted": false});
            }
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
    }


};

