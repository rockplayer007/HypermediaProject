'use strict';


/**
 * Find event with the event's id
 *
 * id Long id of the event you are searching
 * returns Event
 **/
exports.eventIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "Harry Potter reunion",
  "date" : "2017-07-21",
  "location" : "London",
  "description" : "All together to make magic"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Events related to a book
 * List of all the events
 *
 * returns List
 **/
exports.eventsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "name" : "Harry Potter reunion",
  "date" : "2017-07-21",
  "location" : "London",
  "description" : "All together to make magic"
}, {
  "id" : 0,
  "name" : "Harry Potter reunion",
  "date" : "2017-07-21",
  "location" : "London",
  "description" : "All together to make magic"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the book of an event
 *
 * id Long id of the event you want the book of
 * returns Book
 **/
exports.eventsIdBookGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "title" : "Harry Potter 1",
  "authorId" : 5,
  "price" : 10,
  "isbn" : "9780747532743",
  "genre" : "fantasy",
  "event" : "0",
  "quantity" : 3,
  "publisher" : "Bloomsbury Publishing",
  "language" : "english",
  "release" : "1997-06-26"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

