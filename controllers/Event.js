'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.eventIdGET = function eventIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Event.eventIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsGET = function eventsGET (req, res, next) {
  Event.eventsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsIdBookGET = function eventsIdBookGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Event.eventsIdBookGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
