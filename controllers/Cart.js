'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');

module.exports.cartGET = function cartGET (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  Cart.cartGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cartIdGET = function cartIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Cart.cartIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cartIdPUT = function cartIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var books = req.swagger.params['books'].value;
  Cart.cartIdPUT(id,books)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
