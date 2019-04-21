'use strict';

var utils = require('../utils/writer.js');
var Author = require('../service/AuthorService');

module.exports.authorGET = function authorGET (req, res, next) {
  Author.authorGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorIdGET = function authorIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Author.authorIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorPOST = function authorPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Author.authorPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorPUT = function authorPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  Author.authorPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsIdBooksGET = function authorsIdBooksGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Author.authorsIdBooksGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
