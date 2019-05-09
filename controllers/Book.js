'use strict';

var utils = require('../utils/writer.js');
var Book = require('../service/BookService');

module.exports.bookIdGET = function bookIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Book.bookIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksGET = function booksGET (req, res, next) {
  console.log("Ciaoaooaoaoaoao   function booksGET (req, res, next)");
  Book.booksGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksIdAuthorGET = function booksIdAuthorGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Book.booksIdAuthorGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksIdEventGET = function booksIdEventGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Book.booksIdEventGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
