'use strict';


/**
 * Finds authors
 * Get author
 *
 * returns List
 **/
exports.authorGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 5,
  "name" : "Joanne",
  "surname" : "Rowling",
  "biography" : "Author of the famous Harry Potter books"
}, {
  "id" : 5,
  "name" : "Joanne",
  "surname" : "Rowling",
  "biography" : "Author of the famous Harry Potter books"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find authors by ID
 *
 * id Long id to get the author
 * returns Author
 **/
exports.authorIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 5,
  "name" : "Joanne",
  "surname" : "Rowling",
  "biography" : "Author of the famous Harry Potter books"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new author to the store
 *
 * body Author Author to add to the database
 * no response value expected for this operation
 **/
exports.authorPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an existing author
 *
 * body Author Author to add to the database
 * no response value expected for this operation
 **/
exports.authorPUT = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get the books of an author
 *
 * id Long ID of author of which to get the books
 * returns List
 **/
exports.authorsIdBooksGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "title" : "Harry Potter 1",
  "author" : 5,
  "price" : 10,
  "isbn" : "9780747532743",
  "quantity" : 3
}, {
  "id" : 0,
  "title" : "Harry Potter 1",
  "author" : 5,
  "price" : 10,
  "isbn" : "9780747532743",
  "quantity" : 3
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

