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
  return sqlDb
      .from('authors')
      .select()
      .where({ id: id })
      .then(data => {
        return data
      });
}


/**
 * Get the books of an author
 *
 * id Long ID of author of which to get the books
 * returns List
 **/
exports.authorsIdBooksGET = function(id) {

    return sqlDb
        .from("authors")
        .join('writes', 'authors.bookId', 'writes.authorId')
        .join('books', 'books.authorId', 'writes.bookId')
        .select("books.id", "title", "books.authorId", "price", "isbn",
            "quantity", "genre", "event", "description",
            "publisher", "language", "date")
        .where("books.id", id)
        .then(data => {
            return data
        });
}


