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

module.exports.booksByGenreGET = function booksByGenreGET (req, res, next) {
    var genre = req.swagger.params['genre'].value;
    Book.booksByGenreGET(genre)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.booksByThemeGET = function booksByThemeGET (req, res, next) {
    var theme = req.swagger.params['theme'].value;
    Book.booksByThemeGET(theme)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.booksGenresGET = function booksGenresGET (req, res, next) {
    Book.booksGenresGET()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};


module.exports.booksThemesGET = function booksThemesGET (req, res, next) {
    Book.booksThemesGET()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.booksGET = function booksGET (req, res, next) {
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

module.exports.booksIdSimilarGET = function booksIdSimilarGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Book.booksIdSimilarGET(id)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};
