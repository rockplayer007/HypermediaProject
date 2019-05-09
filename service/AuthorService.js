'use strict';


let sqlDb;

exports.authorsDbSetup = function(database) {
  sqlDb = database;
  return database.schema.hasTable("authors").then(exists => {
    if (!exists) {
      //console.log("It doesn't so we create it");
      return database.schema.createTable("authors", table => {
        //table.increments();
        table.increments("id").primary();
        table.string("name");
        table.string("surname");
        table.text("biography");
      });
    }
    else{
      //console.log("table already exists");
    }
  });
};




/**
 * Finds authors
 * Get author
 *
 * returns List
 **/
exports.authorGET = function() {
  return sqlDb("authors")
      .then(data => {
        return data
      });
};


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
      "authorId" : 5,
      "price" : 10,
      "isbn" : "9780747532743",
      "genre" : "fantasy",
      "event" : "0",
      "quantity" : 3,
      "publisher" : "Bloomsbury Publishing",
      "language" : "english",
      "release" : "1997-06-26"
    } ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


