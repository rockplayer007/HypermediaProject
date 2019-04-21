'use strict';


/**
 * Find book with the book's id
 *
 * id Long id of the book you are searching
 * returns Book
 **/
exports.bookIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "title" : "Harry Potter 1",
  "authorId" : 5,
  "price" : 10,
  "isbn" : "9780747532743",
  "quantity" : 3
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Books availble in the store
 * List of books available in the inventory
 *
 * returns List
 **/
exports.booksGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "title" : "Harry Potter 1",
  "authorId" : 5,
  "price" : 10,
  "isbn" : "9780747532743",
  "quantity" : 3
}/*, {
  "id" : 0,
  "title" : "Harry Potter 1",
  "authorId" : 5,
  "price" : 10,
  "isbn" : "9780747532743",
  "quantity" : 3
}*/ ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the author of a book
 *
 * id Long id of the book you want the author of
 * returns Author
 **/
exports.booksIdAuthorGET = function(id) {
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
 * Adds a new book to the store
 *
 * body Book Book will be added to the store
 * no response value expected for this operation
 **/
exports.booksPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an existing book
 *
 * body Book Book to be modify in the database
 * no response value expected for this operation
 **/
exports.booksPUT = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

